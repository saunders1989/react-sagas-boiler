import actions from '../actions';

export default function getApiContent() {
  return dispatch => fetch('https://jsonplaceholder.typicode.com/todos')
    .then(
      response => response.json(),
      error => error,
    )
    .then(json => {
      dispatch(actions.storeContent(json));
    });
}
