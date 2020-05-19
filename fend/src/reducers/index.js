import { combineReducers } from 'redux'
import auth from './auth'
import users from './users'

export default combineReducers({
    authReducer : auth,
    userReducer : users
});