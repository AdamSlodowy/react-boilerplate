/*
 *
 * NavigationContainer reducer
 *
 */

import {fromJS} from 'immutable';
import {
  FETCH_TOPICS_SUCCESS,
  SET_SELECTED_TOPIC
} from './constants';

const initialState = fromJS({
  topics: []
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOPICS_SUCCESS:
      return state.set('topics', action.topics);
    case SET_SELECTED_TOPIC:
      return state.set('selectedTopic', action.topicName);
    default:
      return state;
  }
}

export default navigationContainerReducer;
