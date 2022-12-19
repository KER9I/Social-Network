import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleWare from 'redux-thunk'
import appReducer from './app-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;
