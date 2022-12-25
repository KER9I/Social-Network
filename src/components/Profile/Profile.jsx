import React from 'react';
import style from './Profile.module.css'
import ProfileInformation from './ProfileInformation/ProfileInformation';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  

  return (
    <div className={style.content}>
        <ProfileInformation isOwner={props.isOwner} 
                            profile={props.profile} 
                            status={props.status} 
                            updateStatus={props.updateStatus} 
                            savePhoto={props.savePhoto} />
        <MyPostsContainer />     
    </div>
  );
} 

export default Profile;
