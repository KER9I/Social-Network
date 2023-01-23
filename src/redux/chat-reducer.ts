import { Dispatch } from 'redux';
import { chatAPI, ChatMessageType, StatusType} from '../api/chatAPI';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import {v1} from 'uuid'


type ID = {id: string}
type ChaChatMessageTypeWithID = ChatMessageType & ID
let initialState = {
    messages: [] as ChaChatMessageTypeWithID[],
    status: 'pending' as StatusType,

}

export type InitialStateType = typeof initialState

const chatReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1() }))].filter((m, index, array) => index >= array.length - 100)
            };
        case 'STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status
            };
        default:
            return state;
    }
}


/*ActionCreators*/
type ActionTypes = InferActionsTypes<typeof actions>

export const actions = {
    setMessages: (messages: ChatMessageType[]) => ({ type: 'SET_MESSAGES', payload: {messages} } as const),
    statusChanged: (status: StatusType) => ({ type: 'STATUS_CHANGED', payload: {status} } as const)
}


/*ThunkCreators*/
type ThunkType = BaseThunkType<ActionTypes>

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.setMessages(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}


export const getStartMessages = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}
export const getStopMessages = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatAPI.stop()
}
export const SendChatMessages = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendChatMessage(message)
}



export default chatReducer;