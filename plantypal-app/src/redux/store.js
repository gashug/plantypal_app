// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Create reducers later

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
