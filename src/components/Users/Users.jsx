import React from 'react';
import style from './Users.module.css'
import avaPhoto from '../../assets/images/avaPhoto.jpg'
import { NavLink } from 'react-router-dom';
import axios from 'axios';




let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    pages.splice(11, 2191);

    return (
        <div className={style.content}>
            <div>
                {pages.map((p) => {
                    return <span className={props.currentPage === p && style.selected}
                        onClick={() => { props.onPageChanched(p) }}> {p}</span>
                })}
            </div>
            {props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : avaPhoto} alt='img' className={style.img} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "cd0f1475-3e93-46fe-bded-5fe46146ab91"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                    props.unfollow(u.id);
                                }
                                })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "cd0f1475-3e93-46fe-bded-5fe46146ab91"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                    props.follow(u.id);
                                }
                                })
                            }}>Follow</button>}
                    </div>
                </span>

                <span>
                    <span><div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}

export default Users;






