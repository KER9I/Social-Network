import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

let MyPostsElements = props.postData.map( (p) => <Post message={p.message} likecounter={p.likecounter} key={p.id} /> );

let newPostElement = React.createRef();

let onAddPost = () => {
  props.addPost();
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
}

  return (
    <div className={style.content}>
      <div>
        <textarea 
        onChange={ onPostChange } 
        ref={newPostElement} 
        value={props.newPostText} cols = '100' rows = '5' />
      <div><button onClick={ onAddPost }><span>Add post</span></button></div>
      </div>
      <div className={style.posts}>
        <h2>Posts</h2>
      </div>
      { MyPostsElements }
    </div>
  );
}

export default MyPosts;