import { handleActions } from 'redux-actions';

import { types } from '../actions';

const test = handleActions(
  {
    [types.TEST](state) {
      return {
        ...state,
        test: !state.test,
      };
    },
  },
  {
    test: false,
  },
);

export default test;
