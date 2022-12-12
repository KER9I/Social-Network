import React from 'react';
import style from './Profile.module.css'
import ProfileInformation from './ProfileInformation/Status';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  

  return (
    <div className={style.content}>
        <ProfileInformation profile={props.profile} />
        <MyPostsContainer />     
    </div>
  );
} 

export default Profile;
