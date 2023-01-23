export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export type StatusType = 'pending' | 'ready' | 'error'

type MessagesReceivedSubscribersType = (messages: ChatMessageType[]) => void
type StatusChangedSubscribersType = (status: StatusType) => void

const subscribers = {
    'messages-received': [] as MessagesReceivedSubscribersType[],
    'status-changed': [] as StatusChangedSubscribersType[],
}

let wsURL: WebSocket | null = null
type EventsNamesType = 'messages-received' | 'status-changed'

const closeHandler = () => {    
    notifySubscribersAboutStatus('pending')
    createChanel()
}
const messageHandler = (e: MessageEvent) => {
    const newMessage = JSON.parse(e.data)
    subscribers['messages-received'].forEach(s => s(newMessage))
}
const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}
const errorHandler = () => {
    notifySubscribersAboutStatus('error')
    console.error('REFRESH PAGE')
}

const cleanUp = () => {
    wsURL?.removeEventListener('close', closeHandler)
    wsURL?.removeEventListener('message', messageHandler)
    wsURL?.removeEventListener('open', openHandler)
    wsURL?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: StatusType) => {
 subscribers['status-changed'].forEach(s => s(status))
}

function createChanel() {
    cleanUp()
    wsURL?.close()
    wsURL = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    wsURL.addEventListener('close', closeHandler)
    wsURL.addEventListener('message', messageHandler)
    wsURL.addEventListener('open', openHandler)
    wsURL.addEventListener('error', errorHandler)
}


export const chatAPI = {
    start() {
        createChanel()
    },
    stop() {
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
        wsURL?.close()
    },
    subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscribersType | StatusChangedSubscribersType) {
        //@ts-ignore
        subscribers[eventName].push(callback)
        return () => {
        //@ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscribersType | StatusChangedSubscribersType) {
        //@ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendChatMessage(message: string) {
        wsURL?.send(message)
    }
}

