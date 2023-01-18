import { usersAPI } from '../api/usersAPI';
import { UserType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    filter: {
        term: '',
        friend: null as null | boolean
    },
    isFetching: true,
    followingInProgres: [] as Array<number>,
};

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            };
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            };
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            };
        case 'TOGGLE_FOLLOWING_IN_PROGRES':
            return {
                ...state,
                followingInProgres: action.isFetching
                    ? [...state.followingInProgres, action.userID]
                    : state.followingInProgres.filter(id => id !== action.userID)
            };
        default:
            return state;
    }
}


/*ActionCreators*/
type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    followSuccess: (userID: number) => ({ type: 'FOLLOW', userID } as const),
    unfollowSuccess: (userID: number) => ({ type: 'UNFOLLOW', userID } as const),
    setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
    setFilter: (filter: FilterType) => ({ type: 'SET_FILTER', payload: filter } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', count: totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
    toggleFollowingInProgres: (isFetching: boolean, userID: number) => ({ type: 'TOGGLE_FOLLOWING_IN_PROGRES', isFetching, userID } as const),
}


/*ThunkCreators*/
type ThunkType = BaseThunkType<ActionTypes>

export const requestUsers = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => async (dispatch, getState) => {
    dispatch(actions.setCurrentPage(currentPage))
    dispatch(actions.setFilter(filter))
    dispatch(actions.toggleIsFetching(true))
    const usersData = await usersAPI.getMyUsers(currentPage, pageSize, filter.term, filter.friend)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(usersData.items))
    dispatch(actions.setTotalUsersCount(usersData.totalCount))
}

export const follow = (userID: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingInProgres(true, userID));
    const followData = await usersAPI.follow(userID);
    if (followData.resultCode === 0) {
        dispatch(actions.followSuccess(userID));
    }
    dispatch(actions.toggleFollowingInProgres(false, userID));
}

export const unfollow = (userID: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingInProgres(true, userID));
    const unfollowData = await usersAPI.unfollow(userID);
    if (unfollowData.resultCode === 0) {
        dispatch(actions.unfollowSuccess(userID));
    }
    dispatch(actions.toggleFollowingInProgres(false, userID));
}


export default usersReducer;