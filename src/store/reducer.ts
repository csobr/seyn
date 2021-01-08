import { combineReducers } from 'redux'
import authState from './auth/reducer'
import posts from './posts/reducer'

export default combineReducers({
    auth: authState,
    posts,

})