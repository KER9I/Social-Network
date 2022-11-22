const ADD_POST= 'ADD-POST';
const UPDATE_NEW_POST_TEXT_ACTION_CREATOR = 'UPDATE-NEW-POST-TEXT';



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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likecounter: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT_ACTION_CREATOR) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT_ACTION_CREATOR,
        newText: text
    }
}


export default store;
