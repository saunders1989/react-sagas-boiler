import { handleActions, Action } from 'redux-actions';

import { types } from '../actions';
import { IHomeState, IToDos } from 'src/store/types/home';
// import { Store, IState } from '../model';

export const initialState: IHomeState = {
  count: 0,
  todos: [],
}

const home = handleActions(
  {
    [types.INCREMENT]: (state: IHomeState): IHomeState => {
      const currentValue = state.count;
      const updatedValue = currentValue + 1;

      return {
        ...state,
        count: updatedValue,
      };
    },
    [types.STORE_CONTENT](state: IHomeState, action: Action<[IToDos]>): IHomeState {
      return {
        ...state,
        todos: action.payload,
      };
    },
    [types.ERROR_FETCHING_CONTENT](state: IHomeState, action: any) {
      return {
        ...state,
        todos: action.payload,
      };
    },
  },
  initialState
);

// This is where i need to move to so i have types in model folder
// const home = handleActions(
//   {
//     [types.INCREMENT]: (state: IState): IState => {
//       const currentValue = state.count;
//       const updatedValue = currentValue + 1;

//       return {
//         ...state,
//         count: updatedValue,
//       };
//     },
//     [types.STORE_CONTENT](state, action) {
//       return {
//         ...state,
//         todos: action.payload,
//       };
//     },
//     [types.ERROR_FETCHING_CONTENT](state, action) {
//       return {
//         ...state,
//         todos: action.payload,
//       };
//     },
//   },
//   {
//     initialState
//   },
// );

export default home;

// import { handleActions } from 'redux-actions';

//
// import { types } from '../actions';

// const initialState: IState = [<Store>{
//   count: 0,
//   todos: [],
// }];

// const home = handleActions(
//   {
//     [types.INCREMENT](state: IState): IState {
//       const currentValue = state.count;
//       const updatedValue = currentValue + 1;

//       return {
//         ...state,
//         count: updatedValue,
//       };
//     },
//     [types.STORE_CONTENT](state, action) {
//       return {
//         ...state,
//         todos: action.payload,
//       };
//     },
//     [types.ERROR_FETCHING_CONTENT](state, action) {
//       return {
//         ...state,
//         todos: action.payload,
//       };
//     },
//   },
//   initialState,
// );

// export default home;

