import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      { store => {
          let state = store.getState();
          let addPost = () => {
            store.dispatch(addPostActionCreator());
          }
          let postChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          }
          return <MyPosts updateNewPostText={postChange} addPost={addPost}
            postData={state.profilePage.postData}
            newPostText={state.profilePage.newPostText} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;