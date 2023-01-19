import { useSelector } from 'react-redux';
import { Users }  from './Users';
import React from 'react';
import Preloader from '../Common/Preloader/Preloader';
import { getIsFetching } from '../../redux/users-selectors';






type UsersPagePropsType = {}


export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    return (
        <>
        { isFetching ? <Preloader /> : null }
        <Users />
        </>
    )  
}
