//rootreducer: it's going to hold all reducer details at one place

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import  alertReducer  from './alertReducer';
import profileReducer from './profileReducer';

const rootReducers = combineReducers({
 authReducer,alertReducer,profileReducer
});

export default rootReducers;
