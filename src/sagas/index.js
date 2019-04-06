import {
  all, fork, put, takeEvery, call,
} from 'redux-saga/effects';
import actions, { types } from '../actions';

function* storeApiContent() {
  const data = yield call(() => fetch('https://jsonplaceholder.typicode.com/todos', { method: 'get' })
    .then(res => res.json()));

  yield put(actions.storeContent(data));
}

function* getApiContent() {
  yield takeEvery(types.GET_CONTENT, storeApiContent);
}

function* sagas() {
  yield all([
    fork(getApiContent),
  ]);
}

export default sagas;
