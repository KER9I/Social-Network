import { InferActionsTypes } from "./redux-store";


type MessagesDataType = {
    id: number
    name: string
}
type MessagesTextType = {
    id: number
    message: string
}

let initialState = {
    messagesData: [
        { id: 0, name: 'Sonya' },
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Masha' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Max' },
        { id: 5, name: 'Olya' },
    ] as Array<MessagesDataType>,
    messagesText: [
        { id: 0, message: 'Text 1' },
        { id: 1, message: 'Text 2' },
        { id: 2, message: 'Text 3' },
        { id: 3, message: 'Text 4' },
        { id: 4, message: 'Text 5' },
        { id: 5, message: 'Text 6' },
    ] as Array<MessagesTextType>, 
}

export type InitialStateType = typeof initialState

export const messagesReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            let nextIdMessages = state.messagesText.length + 1
            let newMessage = {
                id: nextIdMessages + 1,
                message: action.newMessageText
             }
            return {
                ...state,
                messagesText: [...state.messagesText, newMessage],
            };
        default:
            return state;
    }
}


type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    sendMessage: (newMessageText: string) => ({type: 'SEND_MESSAGE', newMessageText} as const)
}


export default messagesReducer;