import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';


const MessagesContainer = (props) => {
    let state = props.store.getState().messagesPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let changeMessageText = (newText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newText))
    }

    return (<Messages sendMessage={sendMessage} updateNewMessageText={changeMessageText} messagesPage={state} />)
}

export default MessagesContainer;