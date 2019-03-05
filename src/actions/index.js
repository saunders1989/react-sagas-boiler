import { createActions } from 'redux-actions';

import home from './home';

const types = Object.assign(
  {},
  home,
);

const actions = createActions(
  ...Object.keys(types).map(type => types[type]),
);

export default actions;
export { types };
