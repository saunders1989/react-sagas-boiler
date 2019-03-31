import { createActions } from 'redux-actions';

import home from './home';
import test from './test';

const types = Object.assign(
  {},
  home,
  test,
);

const actions = createActions(
  ...Object.keys(types).map(type => types[type]),
);

export default actions;
export { types };
