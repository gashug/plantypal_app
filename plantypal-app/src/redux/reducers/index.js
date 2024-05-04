// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import gardenReducer from './gardenReducer';
import vegetableReducer from './vegetableReducer';

const rootReducer = combineReducers({
  gardens: gardenReducer,
  vegetables: vegetableReducer
});

export default rootReducer;
