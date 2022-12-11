import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingInProgres, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../Common/Preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanched = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgres: state.usersPage.followingInProgres,
    }
}
 

export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingInProgres, getUsers})(UsersContainer);

