import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Messages.module.css'


type PropsType = {
    name: string
    id: number
}
const Usertext: React.FC<PropsType> = ({id, name}) => {
    let path = '/dialogs/' + id;
    return (
        <div className={style.user}>
            <img src='https://png.pngtree.com/png-vector/20190330/ourlarge/pngtree-vector-avatar-icon-png-image_889929.jpg' alt='img'
            height='50px'className={style.user} ></img>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
}


export default Usertext;