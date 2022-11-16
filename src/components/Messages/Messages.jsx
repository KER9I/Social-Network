import React from 'react';
import style from './Messages.module.css'
import Usertext from './UserText/UserText';
import Messagetext from './MessagesText/MessagesText';


const Messages = (props) => {



    let messageDataElements =  props.messagesData.map( (d) => <Usertext name={d.name} id={d.id} /> );
    let messagesTextElements = props.messagesText.map( (t) =>  <Messagetext message={t.message} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsUsers}>
               { messageDataElements }
            </div>
            <div className={style.messages}>
                { messagesTextElements }
            </div>
        </div>
    );
}

export default Messages;