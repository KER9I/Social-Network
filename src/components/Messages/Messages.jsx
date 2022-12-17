import React from 'react';
import style from './Messages.module.css'
import Usertext from './UserText/UserText';
import Messagetext from './MessagesText/MessagesText';
import { Navigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';



const Messages = (props) => {

    let state = props.messagesPage;
    let messageDataElements = state.messagesData.map((d) => <Usertext name={d.name} key={d.id} id={d.id} />);
    let messagesTextElements = state.messagesText.map((t) => <Messagetext message={t.message} key={t.id} />);

    let addMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }

    if (!props.isAuth) {
        return <Navigate  to={'/login'} />
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsUsers}>
                {messageDataElements}
            </div>
            <div className={style.messages}>
                {messagesTextElements}
                <div>
                    <SendMessage addMessage={addMessage}/>
                </div>
            </div>
        </div>
    );
}

const SendMessage = (props) => {
    return (
        <Formik initialValues={{newMessageText: ''}}
        onSubmit={(values) => {
              props.addMessage(values); 
          }}>
            {() => (
                <Form >
                    <div className={style.field}>
                        <Field type='text' name='newMessageText' placeholder='New message' />
                    </div>
                    <div>
                        <button type='submit'>Send</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Messages;

