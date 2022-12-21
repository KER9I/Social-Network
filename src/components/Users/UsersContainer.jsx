import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingInProgres, requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthNavigate } from '../../hoc/withAuthNaviget';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgres, getIsAuth, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanched = (pageNumber) => {
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



let mapStateToProps = (state) => {
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

 
export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingInProgres, requestUsers}),
    withAuthNavigate
)(UsersContainer);
