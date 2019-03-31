import { createActions } from 'redux-actions';

import home from './home';

const types = Object.assign(
  {},
  home,
);

const actions = createActions.apply(null, [Object.values(types)]);

export default actions;
export { types };

