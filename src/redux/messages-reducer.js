const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const messagesReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case SEND_MESSAGE:
            let newText = state.newMessageText;
            state.newMessageText = '';
            state.messagesText.push({ id: 6, message: newText },);
            return state;
        default:
            return state;
    }

}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default messagesReducer;