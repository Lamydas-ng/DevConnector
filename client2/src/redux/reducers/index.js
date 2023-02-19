//rootreducer: it's going to hold all reducer details at one place

import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducers = combineReducers({
 authReducer,alertReducer
});

export default rootReducers;
