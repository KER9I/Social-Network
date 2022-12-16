import React from 'react';
import style from './Profile.module.css'
import ProfileInformation from './ProfileInformation/ProfileInformation';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  

  return (
    <div className={style.content}>
        <ProfileInformation profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        <MyPostsContainer />     
    </div>
  );
} 

export default Profile;
