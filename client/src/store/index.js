import { createStore, applyMiddleware } from 'redux';
import  stateManager from '../reducers/index';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const middleware = [reduxThunk];

const store = createStore(stateManager, 
  composeWithDevTools(applyMiddleware(...middleware)));

export default store;