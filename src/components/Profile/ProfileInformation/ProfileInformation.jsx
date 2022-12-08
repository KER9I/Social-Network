import React from 'react';
import style from './ProfileInformation.module.css'
import Preloader from '../../Common/Preloader/Preloader'

const ProfileInformation = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={style.content}>
      <div >
        <img src='http://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg' alt='img' width='100%'></img>
      </div>
      <div>
        <img src={props.profile.photos.large} alt='foto'></img>
        avatat + information
      </div>
    </div>
  );
}

export default ProfileInformation;