import { connect } from 'react-redux';
import { actions } from '../../redux/messages-reducer';
import Messages from './Messages';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import React from 'react';



let mapStateToProps = (state: AppStateType) => {
    return {
        messagesPage: state.messagesPage,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, { ...actions }),
    withAuthNavigate
)(Messages);