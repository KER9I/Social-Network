const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    postData: [
        { id: 0, message: 'post 1', likecounter: '1' },
        { id: 1, message: 'post 2', likecounter: '10' },
        { id: 2, message: 'post 3', likecounter: '5' },
        { id: 3, message: 'post 4', likecounter: '8' },
        { id: 4, message: 'post 5', likecounter: '13' },
        { id: 5, message: 'post 6', likecounter: '7' },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likecounter: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
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