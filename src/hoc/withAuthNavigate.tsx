import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../redux/redux-store";


let mapStateToPropsForNavigate = (state: AppStateType) => {
  return {
     isAuth: state.auth.isAuth
  }
}

type MapPropsType = {
  isAuth: boolean
}

type DispatchPropsType = {}

export function withAuthNavigate<WCP extends object>(WrappedComponent: React.ComponentType<WCP>) {

  const NavigateComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    let { isAuth, ...restProps } = props
    if (!isAuth) return <Navigate to='/login' />

    return <WrappedComponent {...restProps as WCP} />
  }
  
  return connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(mapStateToPropsForNavigate, {})(NavigateComponent)
}