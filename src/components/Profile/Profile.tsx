import React from 'react';
import style from './Profile.module.css'
import ProfileInformation from './ProfileInformation/ProfileInformation';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types/types';


export type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
}

const Profile: React.FC<ProfilePropsType> = ({isOwner, profile, savePhoto, status, updateStatus}) => {

  return (
    <div className={style.content}>
        <ProfileInformation isOwner={isOwner} 
                            profile={profile} 
                            status={status} 
                            updateStatus={updateStatus} 
                            savePhoto={savePhoto} />
        <MyPostsContainer />     
    </div>
  );
} 

export default Profile;
