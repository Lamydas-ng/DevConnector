//rootreducer: it's going to hold all reducer details at one place

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  example: () => [],
});

export default rootReducers;
