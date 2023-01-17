import { getAuthUserData } from './auth-reducer';
import { BaseThunkType, InferActionsTypes } from './redux-store';


let initialState = {initialized: false}

export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZATION':
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}


/*ActionCreators*/
type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    setInitialization: () => ({ type: 'SET_INITIALIZATION' } as const)
}


/*ThunkCreators*/
type ThunkType = BaseThunkType<ActionTypes>

export const initializeApp = (): ThunkType => async (dispatch) => {
        await dispatch(getAuthUserData());
        dispatch(actions.setInitialization());
}



export default appReducer;