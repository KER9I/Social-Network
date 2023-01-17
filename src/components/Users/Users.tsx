import React, { FC } from 'react';
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';
import Paginator from '../Common/Paginator/Paginator';
import { PhotosType, UserType } from '../../types/types';
import User from './User';



type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanched: (pageNumber: number) => void
    portionSize?: number
    users: Array<UserType>
    followingInProgres: Array<number>
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}


let Users: FC<PropsType> = (props) => {

    return (
        <div className={style.content}>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                currentPage={props.currentPage} onPageChanched={props.onPageChanched} />
            {props.users.map((u) => <User
                u={u}
                followingInProgres={props.followingInProgres}
                key={u.id}
                unfollow={props.unfollow}
                follow={props.follow}
            />
            )}
        </div>
    );
}

export default Users;






