const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    messagesData: [
        { id: 0, name: 'Sonya' },
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Masha' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Max' },
        { id: 5, name: 'Olya' },
    ],
    messagesText: [
        { id: 0, message: 'Text 1' },
        { id: 1, message: 'Text 2' },
        { id: 2, message: 'Text 3' },
        { id: 3, message: 'Text 4' },
        { id: 4, message: 'Text 5' },
        { id: 5, message: 'Text 6' },
    ],
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newText = action.newMessageText;
            return {
                ...state,
                messagesText: [...state.messagesText, { id: 6, message: newText }],
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageText) => {
    return {
        type: SEND_MESSAGE,
        newMessageText
    }
}

export default messagesReducer;