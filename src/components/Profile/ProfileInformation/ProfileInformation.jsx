import React from 'react';
import style from './ProfileInformation.module.css'
import Preloader from '../../Common/Preloader/Preloader'
//import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import avaPhoto from '../../../assets/images/avaPhoto.jpg'


const ProfileInformation = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

const onPhotoSelected = (e) => {
  if (e.target.files.length) {
    props.savePhoto(e.target.files[0]);
  }
}

  return (
    <div>
    <div className={style.content}>
      <div>
        <div className={style.photo}><img className={style.photo} src={props.profile.photos.large || avaPhoto} width='300px' alt='foto'></img>
        
        <div className={style.status}><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} /></div>
        <div className={style.photoBlock}>
          <b>Change photo</b> 
        <div className={style.selectPhoto}>{ props.isOwner && <input type='file' onChange={ onPhotoSelected } />}</div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProfileInformation;