import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    postData: [
        { id: 0, message: 'post 1', likecounter: '1' },
        { id: 1, message: 'post 2', likecounter: '10' },
        { id: 2, message: 'post 3', likecounter: '5' },
        { id: 3, message: 'post 4', likecounter: '8' },
        { id: 4, message: 'post 5', likecounter: '13' },
        { id: 5, message: 'post 6', likecounter: '7' },
    ],
    newPostText: '',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likecounter: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
            case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}

/*ActionCreators*/

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}


/*ThunkCreators*/

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
            }
        });
    }
}


export default profileReducer;