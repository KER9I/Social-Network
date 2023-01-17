import { ResultCodeEnam } from '../api/api';
import { authAPI} from '../api/authAPI';
import { InferActionsTypes, BaseThunkType } from './redux-store';


let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_AUTH_USER_DATA':
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
}


/*ActionCreators*/
type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => 
    ({type: 'SET_AUTH_USER_DATA', data: { id, email, login, isAuth }} as const)
}


/*ThunkCreators*/
type ThunkType = BaseThunkType<ActionTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.authMe();
    if (meData.resultCode === ResultCodeEnam.Success) {
        let { id, email, login } = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, setStatus: any): ThunkType => async (dispatch: any) => {
    const loginData = await authAPI.login(email, password, rememberMe);
    if (loginData.resultCode === ResultCodeEnam.Success) {
        dispatch(getAuthUserData());
    } else {
        setStatus(loginData.messages);
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === ResultCodeEnam.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}


export default authReducer;