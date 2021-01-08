import {createStore, applyMiddleware, compose, Store} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';


const store: Store<PostsState, PostsAction> & {
  dispatch: DispatchType
  
} = createStore(reducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducer>;

export default store;
