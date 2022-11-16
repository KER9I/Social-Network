import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import MyInformation from './MyInformation/MyInformation';

const Profile = (props) => {
  

  return (
    <div className={style.content}>
        <MyInformation />
        <MyPosts postData={props.postData}  />     
    </div>
  );
}

export default Profile;