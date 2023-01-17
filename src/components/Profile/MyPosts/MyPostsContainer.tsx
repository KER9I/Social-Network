import { actions } from '../../../redux/profile-reducer'
import { connect } from 'react-redux';
import MyPosts, { DispatchPropsType, MapPropsType }  from './MyPosts';
import { AppStateType } from '../../../redux/redux-store';


let mapStateToProps = (state: AppStateType) => {
  return {
    postData: state.profilePage.postData
  }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
  addPost: actions.addPost})(MyPosts);

export default MyPostsContainer;
