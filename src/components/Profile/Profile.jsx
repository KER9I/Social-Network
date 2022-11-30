import React from 'react';
import style from './Profile.module.css'
import MyInformation from './MyInformation/MyInformation';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  

  return (
    <div className={style.content}>
        <MyInformation />
        <MyPostsContainer store={props.store} />     
    </div>
  );
}

export default Profile;