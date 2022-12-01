import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';



let mapStateToProps = (state) => {
    return {
    messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newText) => {
            dispatch(updateNewMessageTextActionCreator(newText));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;