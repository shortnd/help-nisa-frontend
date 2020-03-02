import { combineReducers } from 'redux';

import standings from './features/standings/reducer';

const rootReducer = combineReducers({
  standings
});

export default rootReducer;
