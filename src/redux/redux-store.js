import { combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer'


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer 
});

let store = createStore(reducers);

export default store;
