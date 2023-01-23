import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css'


const Nav = () => {
  return (
    <nav className={style.nav}>
      <div className={style.link}>
        <NavLink to='/profile' className={style.a}>Profile</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to='/friends' className={style.a}>Friends</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to='/messages' className={style.a}>Messages</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to='/users' className={style.a}>Users</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to='/chat' className={style.a}>Chat</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to='/info' className={style.a}>Info</NavLink>
      </div>
    </nav>
  )
}

export default Nav;