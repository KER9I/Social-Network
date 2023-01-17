import { profileAPI } from '../api/profileAPI';
import { PhotosType, PostType, ProfileType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';



let initialState = {
    postData: [
        { id: 0, message: 'post 1', likecounter: 1 },
        { id: 1, message: 'post 2', likecounter: 10 },
        { id: 2, message: 'post 3', likecounter: 5 },
        { id: 3, message: 'post 4', likecounter: 8 },
        { id: 4, message: 'post 5', likecounter: 13 },
        { id: 5, message: 'post 6', likecounter: 7 },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
}

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: 6,
                message: action.newPostText,
                likecounter: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'SET_MY_STATUS':
            return {
                ...state,
                status: action.status
            };
        case 'SAVE_PHOTOS_SUCCEESS':
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            };
        default:
            return state;
    }
}


/*ActionCreators*/
type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    addPost: (newPostText: string) => ({ type: 'ADD_POST', newPostText } as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'SET_USER_PROFILE', profile } as const),
    setMyStatus: (status: string) => ({ type: 'SET_MY_STATUS', status } as const),
    savePhotoSuccess: (photos: PhotosType) => ({ type: 'SAVE_PHOTOS_SUCCEESS', photos } as const),
}


/*ThunkCreators*/
type ThunkType = BaseThunkType<ActionTypes>

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const getProfileData = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(getProfileData));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const getStatusData = await profileAPI.getStatus(userId);
    dispatch(actions.setMyStatus(getStatusData));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const updateStatysData = await profileAPI.updateStatus(status);
    if (updateStatysData.resultCode === 0) {
        dispatch(actions.setMyStatus(status));
    }
}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
    const savePhotoData = await profileAPI.savePhoto(file);
    if (savePhotoData.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(savePhotoData.data.photos));
    }
}


export default profileReducer;