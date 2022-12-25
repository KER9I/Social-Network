import React from 'react';
import style from './Profile.module.css'
import Profile from './Profile';
import { getStatus, getUserProfile, updateStatus, savePhoto } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { withAuthNavigate } from '../../hoc/withAuthNaviget';
import { compose } from 'redux';




function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  };

  componentDidUpdate(prevProps) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile();
    }
  };
  


  render() {
    return (
      <div className={style.content}>
        <Profile {...this.props} 
                  isOwner={!this.props.router.params.userId} 
                  profile={this.props.profile} 
                  status={this.props.status} 
                  updateStatus={this.props.updateStatus}
                  savePhoto={this.props.savePhoto} />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  }
};




export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  withAuthNavigate
)(ProfileContainer);