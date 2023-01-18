import { AppStateType } from "./redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users;
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgres = (state: AppStateType) => {
    return state.usersPage.followingInProgres;
}

export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth;
}
export const getUserFilter = (state: AppStateType) => {
    return state.usersPage.filter
}
