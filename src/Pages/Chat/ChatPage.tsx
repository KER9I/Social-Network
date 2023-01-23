import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import { ChatMessageType } from '../../api/chatAPI'
import { getStartMessages, getStopMessages, SendChatMessages } from '../../redux/chat-reducer'
import { AppStateType } from '../../redux/redux-store'




const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat />
        </div>
    )
}


const Chat: React.FC = () => {
    const dispatch = useDispatch()


    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(getStartMessages() as unknown as AnyAction)
        return () => {
            dispatch(getStopMessages() as unknown as AnyAction)
        }
    }, [])

return (
    <div>
        {status === 'error' && <div>Some Eror. Please refresh page</div>} 
        <Messages />
        <AddMessageForm   />
    </div>
)
}

const Messages: React.FC<{}> = () => {

    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null) 

    const [isAutoScroll, setIsAutoScroll] = useState(true)
    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
        messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return (
        <div style={{ height: '400px', overflowY: 'auto' }} onScroll={scrollHandler}>
            {messages.map((m) =>
                <Message key={m.id} message={m} />)}
                <div ref={messagesAnchorRef}></div>
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageType }> = React.memo(({ message }) => {
    return (
        <div style={{ fontSize: '14px' }}>
            <img src={message.photo} alt='img'
                height='30px'></img> <strong >{message.userName}</strong>
            <br />
            {message.message}
            <hr />
        </div>
    )
})


const AddMessageForm: React.FC<{}> = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

    const SendMessage = () => {
        if (!message) {
            return
        }
        dispatch(SendChatMessages(message) as unknown as AnyAction)
        setMessage('')
    }

    return (
        <div>
            <div>
                <textarea placeholder='write text' onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={status !== 'ready'} onClick={SendMessage}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage


