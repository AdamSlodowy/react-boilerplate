/*
 *
 * NavigationContainer actions
 *
 */

import {
  FETCH_TOPICS,
  FETCH_TOPICS_FAILURE,
  FETCH_TOPICS_SUCCESS,
  SET_SELECTED_TOPIC,
  TOGGLE_MENU
} from './constants';

export function fetchTopics() {
  return {
    type: FETCH_TOPICS,
  };
}
export function fetchTopicsSuccess(topics) {
  return {
    type: FETCH_TOPICS_SUCCESS,
    topics
  };
}
export function fetchTopicsFailure(message) {
  return {
    type: FETCH_TOPICS_FAILURE,
    message
  };
}

export function setSelectedTopic(topicName) {
  return {
    type: SET_SELECTED_TOPIC,
    topicName
  }
}

export function toggleMenu() {
  return {
    type: TOGGLE_MENU
  }
}
