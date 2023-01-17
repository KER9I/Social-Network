import React from 'react';
import Header, { MapPropsType, DispatchPropsType } from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';




class HeaderCountainer extends React.Component<MapPropsType & DispatchPropsType> {

  render() {

    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { logout } )(HeaderCountainer);