import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  user: reducer,
});

const configureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;
