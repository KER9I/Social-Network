import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/state'


const MyPosts = (props) => {


let MyPostsElements = props.postData.map( (p) => <Post message={p.message} likecounter={p.likecounter}/> );

let newPostElement = React.createRef();

let addPost = () => {
  props.dispatch(addPostActionCreator());
}

let postChange = () => {
  let text = newPostElement.current.value;
  props.dispatch(updateNewPostTextActionCreator(text));
}

  return (
    <div className={style.content}>
      <div>
        <textarea 
        onChange={ postChange } 
        ref={newPostElement} 
        value={props.newPostText} cols = '100' rows = '5' />
      <div><button onClick={ addPost }><span>Add post</span></button></div>
      </div>
      <div className={style.posts}>
        <h2>Posts</h2>
      </div>
      { MyPostsElements }
    </div>
  );
}

export default MyPosts;