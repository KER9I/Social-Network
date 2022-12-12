import React from 'react';
import style from './ProfileInformation.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus';

const ProfileInformation = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div >
        <img src='http://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg' alt='img' width='100%'></img>
      </div>
    <div className={style.content}>
      <div>
        <div className={style.status}><img src={props.profile.photos.large} alt='foto'></img></div>
        <div className={style.status}><ProfileStatus status={"hi"} /></div>
      </div>
    </div>
    </div>
  );
}

export default ProfileInformation;