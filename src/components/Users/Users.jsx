import React from 'react';
import style from './Users.module.css'
import avaPhoto from '../../assets/images/avaPhoto.jpg'
import { NavLink } from 'react-router-dom';
import Paginator from '../Common/Paginator/Paginator';




let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    pages.splice(11, 2191);

    return (
        <div className={style.content}>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} 
            currentPage={props.currentPage} onPageChanched={props.onPageChanched} />
            {props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : avaPhoto} alt='img' className={style.img} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgres.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id);
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgres.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id);
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






