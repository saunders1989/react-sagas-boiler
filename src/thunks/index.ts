import { Dispatch } from 'react';

import actions from '../actions';
import { IHomeState } from 'src/store/types/home';


export default function getApiContent() {
  // return async (dispatch: Dispatch<IHomeState>) => {
  //   let result: [IToDos];

  //   try {
  //     result = await fetch('https://jsonplaceholder.typicode.com/todos');
  //   } catch (error) {
  //     dispatch(actions.errorFetchingContent(error))

  //     return error;
  //   }

  //   dispatch(actions.storeContent(result));
  // };

  return (dispatch: Dispatch<IHomeState>) => fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      dispatch(actions.storeContent(json));
    })
    .catch(error => dispatch(actions.errorFetchingContent(error)));
}
