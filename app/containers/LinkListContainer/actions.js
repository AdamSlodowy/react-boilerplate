/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_SUCCESS,
  REQUEST_LINKS_FAILURE
} from './constants';

export function fetchLinksSuccess(links) {
  return {
    type: REQUEST_LINKS_SUCCESS,
    links
  };
}
export function fetchLinksFailure(message) {
  return {
    type: REQUEST_LINKS_FAILURE,
    message
  };
}
