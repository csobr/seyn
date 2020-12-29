import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './authReducer'

const rootReducer = combineReducers({
    auth: authReducer

});
const store = () => {
    return createStore(
        rootReducer,
        compose(applyMiddleware(thunk))
    );
}
export type RootReducer = ReturnType<typeof rootReducer>;

    export default store;