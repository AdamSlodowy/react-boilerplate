import  {take, call, put, select} from 'redux-saga/effects';

import {FETCH_TOPICS} from './constants';
import {takeLatest} from 'redux-saga';
import {fetchTopicsSuccess, fetchTopicsFailure} from './actions';

function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(fetchTopicsSuccess(topics));
  } catch (e) {
    yield put(fetchTopicsFailure(e.message))
  }
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(FETCH_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
];
