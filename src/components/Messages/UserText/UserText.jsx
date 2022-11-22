import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Messages.module.css'

const Usertext = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.user}>
            <img src='https://png.pngtree.com/png-vector/20190330/ourlarge/pngtree-vector-avatar-icon-png-image_889929.jpg'
            height='50px'className={style.user} ></img>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


export default Usertext;