import * as asyncInitialState from 'redux-async-initial-state';
import { combineReducers } from 'redux';

import usersDetails from 'home/store/reducer';

const AppReducer = combineReducers({
  asyncInitialState: asyncInitialState.innerReducer,
  usersDetails
});

export default asyncInitialState.outerReducer(AppReducer);
