import { getAuthUserData } from './auth-reducer';

const SET_INITIALIZATION = 'SET_INITIALIZATION';




let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

/*ActionCreators*/

export const setInitialization = () => {
    return {
        type: SET_INITIALIZATION,
    }
}


/*ThunkCreators*/

export const initializeApp = () => async (dispatch) => {
        await dispatch(getAuthUserData());
        dispatch(setInitialization());
}



export default appReducer;