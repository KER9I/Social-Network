import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRES = 'TOGGLE_FOLLOWING_IN_PROGRES';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgres: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING_IN_PROGRES:
            return {
                ...state,
                followingInProgres: action.isFetching
                    ? [...state.followingInProgres, action.userID]
                    : [state.followingInProgres.filter(id => id !== action.userID)]
            };
        default:
            return state;
    }
}


/*ActionCreators*/

export const followSuccess = (userID) => {
    return {
        type: FOLLOW,
        userID
    }
}
export const unfollowSuccess = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleFollowingInProgres = (isFetching, userID) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRES,
        isFetching,
        userID
    }
}

/*ThunkCreators*/

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
       dispatch(setCurrentPage(currentPage));
       dispatch(toggleIsFetching(true));
       const data = await usersAPI.getMyUsers(currentPage, pageSize);
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
}

export const follow = (userID) => async (dispatch) => {
    dispatch(toggleFollowingInProgres(true, userID));
    const response = await usersAPI.follow(userID);
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userID));
    }
    dispatch(toggleFollowingInProgres(false, userID));
}

export const unfollow = (userID) => async (dispatch) => {
    dispatch(toggleFollowingInProgres(true, userID));
    const response = await usersAPI.unfollow(userID);
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userID));
    }
    dispatch(toggleFollowingInProgres(false, userID));
}




export default usersReducer;