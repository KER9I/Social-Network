import React from 'react';
import style from './Profile.module.css'
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
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
      userId = 2;
    }
    this.props.getUserProfile(userId);
  };


  render() {
    return (
      <div className={style.content}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
};






export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  // withAuthNavigate
)(ProfileContainer);