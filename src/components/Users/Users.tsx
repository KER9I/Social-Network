import React, { useEffect } from 'react';
import style from './Users.module.css'
import Paginator from '../Common/Paginator/Paginator';
import User from './User';
import { UserSearchForm } from './UserSearchForm';
import { FilterType, follow, requestUsers, unfollow } from '../../redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFollowingInProgres, getPageSize, getTotalUsersCount, getUserFilter, getUsers } from '../../redux/users-selectors';
import { AnyAction } from 'redux';



type PropsType = {
    portionSize?: number
}

export const Users: React.FC<PropsType> = (props) => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const filter = useSelector(getUserFilter)
    const followingInProgres = useSelector(getFollowingInProgres)

    

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter) as unknown as AnyAction)
    }, [])

    const onPageChanched = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter) as unknown as AnyAction)
    }
    const onFilterChanched = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter) as unknown as AnyAction)
    }
    const onFollow = (userID: number) => {
        dispatch(follow(userID) as unknown as AnyAction)
    }
    const onUnfollow = (userID: number) => {
        dispatch(unfollow(userID) as unknown as AnyAction)
    }


    return (
        <div className={style.content}>
            <div>
            <UserSearchForm  onFilterChanched={onFilterChanched} />
            </div>

            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                currentPage={currentPage} onPageChanched={onPageChanched} />
            {users.map((u) => <User
                u={u}
                followingInProgres={followingInProgres}
                key={u.id}
                unfollow={onUnfollow}
                follow={onFollow}
            />
            )}
        </div>
    );
}

export default Users;


