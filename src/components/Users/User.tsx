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

const User: React.FC<PropsType> = ({ followingInProgres, unfollow, follow, u }) => {
    return (
        <div style={{ marginBottom: '20px', display: 'flex' }}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : avaPhoto} alt='img' className={style.img} />
                    </NavLink>
                </div>
            </span>
            <div style={{ flexDirection: 'column'}}>
                <div style={{margin: '5px'}}>
                    <div><b>Name:</b> {u.name}</div>
                    <div><b>Status:</b> {u.status ? u.status : 'no status'}</div>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={followingInProgres.some(id => id === u.id)} onClick={() => {
                            unfollow(u.id);
                        }}>Unfollow</button>
                        : <button disabled={followingInProgres.some(id => id === u.id)} onClick={() => {
                            follow(u.id);
                            console.log(u)
                        }}>Follow</button>}
                </div>
            </div>
        </div>
    )
}

export default User