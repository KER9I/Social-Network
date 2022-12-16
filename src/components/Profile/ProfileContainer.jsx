import React from 'react';
import style from './Profile.module.css'
import Profile from './Profile';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
// import { withAuthNavigate } from '../../hoc/withAuthNaviget';
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
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 27034; //27034
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  };


  render() {
    return (
      <div className={style.content}>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
};






export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthNavigate
)(ProfileContainer);