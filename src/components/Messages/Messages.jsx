import React from 'react';
import style from './Messages.module.css'
import Usertext from './UserText/UserText';
import Messagetext from './MessagesText/MessagesText';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from './../../redux/messages-reducer';


const Messages = (props) => {

    
    let state = props.store.getState().messagesPage;

    let messageDataElements = state.messagesData.map((d) => <Usertext name={d.name} id={d.id} />);
    let messagesTextElements = state.messagesText.map((t) => <Messagetext message={t.message} />);
    let newMessageText = state.newMessageText;
    
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }    

    let changeMessageText = (event) => {
    let newText = event.target.value;
    props.store.dispatch(updateNewMessageTextActionCreator(newText))
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsUsers}>
                {messageDataElements}
            </div>
            <div className={style.messages}>
                {messagesTextElements}
                <div>
                    <div><textarea value={newMessageText}
                     onChange={changeMessageText}
                     cols = '100' rows='3'/></div>
                    <div><button onClick={sendMessage}><span>Send</span></button></div>
                </div>
            </div>
        </div>
    );
}

export default Messages;