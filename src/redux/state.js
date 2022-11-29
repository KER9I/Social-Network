import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer'


let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 0, message: 'post 1', likecounter: '1' },
                { id: 0, message: 'post 2', likecounter: '10' },
                { id: 0, message: 'post 3', likecounter: '5' },
                { id: 0, message: 'post 4', likecounter: '8' },
                { id: 0, message: 'post 5', likecounter: '13' },
                { id: 0, message: 'post 6', likecounter: '7' },
            ],
            newPostText: '',
        },
        messagesPage: {
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
            newMessageText: '',
        },
    },
    _callSubscriber() { },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        messagesReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
