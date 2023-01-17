import React from 'react';
import style from './Profile.module.css'
import Profile from './Profile';
import { getStatus, getUserProfile, updateStatus, savePhoto } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
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


type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: File) => void
  router: any
  profile: any
}

type PropsType = MapPropsType & DispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

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

  componentDidUpdate(prevProps: PropsType) {
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

let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  }
};




export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
  withRouter,
  withAuthNavigate
)(ProfileContainer);