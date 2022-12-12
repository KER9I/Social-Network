import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';
import { withAuthNavigate } from '../../hoc/withAuthNaviget';
import { compose } from 'redux';



let mapStateToProps = (state) => {
    return {
    messagesPage: state.messagesPage,
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





export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Messages);