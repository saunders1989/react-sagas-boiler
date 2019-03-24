import { handleActions } from 'redux-actions';

import { types } from '../actions';

const home = handleActions(
  {
    [types.INCREMENT](state) {
      const currentValue = state.count;
      const updatedValue = currentValue + 1;

      return {
        ...state,
        count: updatedValue,
      };
    },
    [types.STORE_CONTENT](state, action) {
      return {
        ...state,
        todos: action.payload,
      };
    },
    [types.ERROR_FETCHING_CONTENT](state, action) {
      return {
        ...state,
        todos: action.payload,
      };
    },
  },
  {
    count: 0,
    todos: [],
  },
);

export default home;
