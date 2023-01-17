import React from 'react'
import { NavLink } from 'react-router-dom';
import avaPhoto from '../../assets/images/avaPhoto.jpg'
import { UserType } from '../../types/types';
import style from './Users.module.css'


type PropsType = {
    u: UserType
    followingInProgres: Array<number>
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}

const User: React.FC<PropsType> = ({followingInProgres, unfollow, follow, u}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : avaPhoto} alt='img' className={style.img} />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={followingInProgres.some(id => id === u.id)} onClick={() => {
                            unfollow(u.id);
                        }}>Unfollow</button>
                        : <button disabled={followingInProgres.some(id => id === u.id)} onClick={() => {
                            follow(u.id);
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
        </div>
    )
}

export default User