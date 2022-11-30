import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messages-reducer';
import StoreContext from '../../StoreContext';
import Messages from './Messages';


const MessagesContainer = () => {

    return (
        <StoreContext.Consumer>
            { store => {
                    let state = store.getState().messagesPage;
                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator())
                    }
                    let changeMessageText = (newText) => {
                        store.dispatch(updateNewMessageTextActionCreator(newText))
                    }
                    return (<Messages sendMessage={sendMessage}
                        updateNewMessageText={changeMessageText}
                        messagesPage={state} />)
                }
            }
        </StoreContext.Consumer>
    )
}

export default MessagesContainer;