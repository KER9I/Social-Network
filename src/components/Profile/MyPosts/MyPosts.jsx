import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import AddPostForm from './PostForm';


const MyPosts = (props) => {

  let MyPostsElements = props.postData.map((p) => <Post message={p.message} likecounter={p.likecounter} key={p.id} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText)

  }
  return (
    <div className={style.content}>
      <div className={style.posts}>
        <h2>Posts</h2>
      </div>
      <div className={style.postsButton}>
        <AddPostForm addPost={onAddPost} />
      </div>
      {MyPostsElements}
    </div>
  );
}

export default MyPosts;