import React, { useEffect } from 'react';
import style from './Users.module.css'
import Paginator from '../Common/Paginator/Paginator';
import User from './User';
import { UserSearchForm } from './UserSearchForm';
import { FilterType, follow, requestUsers, unfollow } from '../../redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFollowingInProgres, getPageSize, getTotalUsersCount, getUserFilter, getUsers } from '../../redux/users-selectors';
import { AnyAction } from 'redux';
import { useSearchParams } from 'react-router-dom';



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

    const [searchParams, setSearchParams] = useSearchParams()


    useEffect(() => {
        const result: any = {}
        // @ts-ignore
        for (const [key, value] of searchParams.entries()) {
            let value2: any = +value
            if (isNaN(value2)) {
                value2 = value
            }
            if (value === 'true') {
                value2 = true
            } else if (value === 'false') {
                value2 = false
            }
            result[key] = value2
        }

        let actualPage = result.page || currentPage
        let term = result.term || filter.term

        let friend = result.friend || filter.friend
        if (result.friend === false) {
            friend = result.friend
        }

        const actualFilter = { friend, term }

        dispatch(requestUsers(actualPage, pageSize, actualFilter) as unknown as AnyAction)
    }, [])

    useEffect(() => {

        const term = filter.term
        const friend = filter.friend

        let urlQuery =
            (term === '' ? '' : `&term=${term}`)
            + (friend === null ? '' : `&friend=${friend}`)
            + (currentPage === 1 ? '' : `&page=${currentPage}`)

        setSearchParams(urlQuery)
    }, [filter, currentPage])




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
                <UserSearchForm onFilterChanched={onFilterChanched} />
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

//export default Users;

