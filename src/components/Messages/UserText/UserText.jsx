import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Messages.module.css'

const Usertext = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


export default Usertext;