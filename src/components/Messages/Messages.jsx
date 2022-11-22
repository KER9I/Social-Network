import React from 'react';
import style from './Messages.module.css'
import Usertext from './UserText/UserText';
import Messagetext from './MessagesText/MessagesText';



const Messages = (props) => {

    let messageDataElements = props.messagesState.messagesData.map((d) => <Usertext name={d.name} id={d.id} />);
    let messagesTextElements = props.messagesState.messagesText.map((t) => <Messagetext message={t.message} />);

    let newMessageElement = React.createRef();
    
    

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsUsers}>
                {messageDataElements}
            </div>
            <div className={style.messages}>
                {messagesTextElements}
                <div>
                    <textarea cols = '100' rows='3'  />
                    <div><button onClick={ sendMessage }><span>Send</span></button></div>
                </div>
            </div>
        </div>
    );
}

export default Messages;