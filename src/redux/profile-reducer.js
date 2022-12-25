import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_MY_STATUS = 'SET_MY_STATUS';
const SAVE_PHOTOS_SUCCEESS = 'SAVE_PHOTOS_SUCCEESS';


let initialState = {
    postData: [
        { id: 0, message: 'post 1', likecounter: '1' },
        { id: 1, message: 'post 2', likecounter: '10' },
        { id: 2, message: 'post 3', likecounter: '5' },
        { id: 3, message: 'post 4', likecounter: '8' },
        { id: 4, message: 'post 5', likecounter: '13' },
        { id: 5, message: 'post 6', likecounter: '7' },
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: action.newPostText,
                likecounter: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_MY_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SAVE_PHOTOS_SUCCEESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state;
    }
}

/*ActionCreators*/

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setMyStatus = (status) => {
    return {
        type: SET_MY_STATUS,
        status
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTOS_SUCCEESS,
        photos
    }
}


/*ThunkCreators*/

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setMyStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setMyStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}


export default profileReducer;