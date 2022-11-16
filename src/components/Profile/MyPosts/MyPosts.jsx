import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {


let MyPostsElements = props.postData.map( (p) => <Post message={p.message} likecounter={p.likecounter}/> );

  return (
    <div className={style.content}>
      <div>
        <textarea cols = '100' rows = '5'></textarea>
      <div><button><span>Add post</span></button></div>
      </div>
      <div className={style.posts}>
        <h2>Posts</h2>
      </div>
      { MyPostsElements }
    </div>
  );
}

export default MyPosts;