import {take, call, put, select} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga';
import {SET_SELECTED_TOPIC} from '../../containers/NavigationContainer/constants';
import {REQUEST_LINKS_SUCCESS, REQUEST_LINKS_FAILURE} from './constants';
import {fetchLinksSuccess, fetchLinksFailure} from './actions';

function fetchLinksFromServer(topicName) {
  return fetch('http://localhost:3000/api/topics/' + topicName + '/links')
    .then(response => response.json());
}
// Individual exports for testing
function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(fetchLinksSuccess(links));
  } catch (e) {
    yield put(fetchLinksFailure(e.message))
  }
}

export function* defaultSaga() {
  yield* takeLatest(SET_SELECTED_TOPIC, fetchLinks)
}

// All sagas to be loaded
export default [
  defaultSaga
];
