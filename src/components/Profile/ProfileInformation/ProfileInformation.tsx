import React, { ChangeEvent } from 'react';
import style from './ProfileInformation.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatus';
import avaPhoto from '../../../assets/images/avaPhoto.jpg'
import { ProfilePropsType } from '../Profile';



const ProfileInformation: React.FC<ProfilePropsType> = ({isOwner, profile, savePhoto, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
  if (e.target.files?.length) {
    savePhoto(e.target.files[0]);
  }
}

  return (
    <div className={style.content}>
        <div className={style.photo}><img className={style.photo} src={profile.photos.large || avaPhoto} width='300px' alt='foto'></img>
        <div className={style.status}><ProfileStatusWithHooks status={status} updateStatus={updateStatus} /></div>
        { isOwner && <div className={style.selectPhoto}><strong>Change photo: </strong><input type='file' onChange={ onPhotoSelected } /></div> }
        </div>
    </div>
  );
}

export default ProfileInformation;