import { connect } from 'react-redux';
import { follow, unfollow, requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgres, getIsAuth, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';


type OwnPropsType = {}

type MapStateToPropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    isAuth: boolean
    users: Array<UserType>
    followingInProgres: Array<number>
}

type MapDispatchToPropsType = {

    unfollow: (userID: number) => void
    follow: (userID: number) => void
    requestUsers: ( currentPage: number, pageSize: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanched = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {   
        return (
            <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanched={this.onPageChanched}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow} 
                   unfollow={this.props.unfollow}
                   followingInProgres={this.props.followingInProgres}
            />
            </>
        )     
    }
}



let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgres: getFollowingInProgres(state),
        isAuth: getIsAuth(state),
    }
}

 
export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, { follow, unfollow, requestUsers}),
    withAuthNavigate
)(UsersContainer);
