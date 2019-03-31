import { combineReducers } from 'redux';

import home from './home';
import test from './test';

const reducers = combineReducers({
  home,
  test,
});

export default reducers;
