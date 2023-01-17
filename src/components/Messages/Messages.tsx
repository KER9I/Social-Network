import React from 'react';
import style from './Messages.module.css'
import Usertext from './UserText/UserText';
import Messagetext from './MessagesText/MessagesText';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import { InitialStateType } from '../../redux/messages-reducer';
import { Field, Form, Formik } from 'formik';


type OwnPropsType = {
    messagesPage: InitialStateType
    sendMessage: (messagesText: string) => void
}

const Messages: React.FC<OwnPropsType> = (props) => {

    let state = props.messagesPage;
    let messageDataElements = state.messagesData.map((d) => <Usertext name={d.name} key={d.id} id={d.id} />);
    let messagesTextElements = state.messagesText.map((t) => <Messagetext message={t.message} key={t.id} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsUsers}>
                {messageDataElements}
            </div>
            <div className={style.messages}>
                {messagesTextElements}
                <div>
                    <SendMessage addMessage={props.sendMessage}/>
                </div>
            </div>
        </div>
    );
}


type AddMassageFormPropsType = {
    addMessage: (newMessageText: string) => void
 }

const SendMessage: React.FC<AddMassageFormPropsType> = (props) => {
   
    let addNewMessage = (values: string) => {
        props.addMessage(values)
    }
    return (
        <Formik initialValues={{ newMessageText: '' }}
            onSubmit = {(values) => {
                addNewMessage(values.newMessageText);
            }}>
            {() => (
                <Form>
                    <div className={style.field}>
                        <Field type='text' name='newMessageText' placeholder='New message' />
                    </div>
                    <div>
                        <button type='submit'>Send</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Messages;

