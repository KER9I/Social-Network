import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css'




const Nav: React.FC = () => {


  return (
    <nav className={style.nav}>
      <div className={style.link}>
        <NavLink to='/profile' className={navData => navData.isActive ? style.activeLink : style.a}>Profile</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to='/messages' className={navData => navData.isActive ? style.activeLink : style.a}>Messages</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to='/users' className={navData => navData.isActive ? style.activeLink : style.a}>Users</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to='/chat' className={navData => navData.isActive ? style.activeLink : style.a}>Chat</NavLink>
      </div>
      <div className={style.link}>
        <NavLink to='/info' className={navData => navData.isActive ? style.activeLink : style.a}>Info</NavLink>
      </div>
    </nav>
  )
  }

export default Nav;



  