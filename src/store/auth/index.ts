import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './reducer'

const rootReducer = combineReducers({
    auth: authReducer

});
const store = () => {
    return createStore(
        rootReducer,
        compose(applyMiddleware(thunk))
    );
}
export type RootState = ReturnType<typeof rootReducer>

    export default store;