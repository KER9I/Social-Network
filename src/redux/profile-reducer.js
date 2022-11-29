const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    postData: [
        { id: 0, message: 'post 1', likecounter: '1' },
        { id: 0, message: 'post 2', likecounter: '10' },
        { id: 0, message: 'post 3', likecounter: '5' },
        { id: 0, message: 'post 4', likecounter: '8' },
        { id: 0, message: 'post 5', likecounter: '13' },
        { id: 0, message: 'post 6', likecounter: '7' },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                likecounter: 0
            }
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;