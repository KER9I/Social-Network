import React from 'react';
import { PostType } from '../../../types/types';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import AddPostForm from './PostForm';



export type MapPropsType = {
  postData: Array<PostType>
}
export type DispatchPropsType = {
  addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = ({postData, addPost}) => {

  let MyPostsElements = postData.map((p) => <Post message={p.message} likecounter={p.likecounter} key={p.id} />);

  return (
    <div className={style.content}>
      <div className={style.posts}>
        <h2>Posts</h2>
      </div>
      <div className={style.postsButton}>
        <AddPostForm addPost={addPost} />
      </div>
      {MyPostsElements}
    </div>
  );
}

export default MyPosts;