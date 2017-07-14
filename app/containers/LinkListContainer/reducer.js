/*
 *
 * LinkListContainer reducer
 *
 */

import {fromJS} from 'immutable';
import {REQUEST_LINKS_SUCCESS} from './constants';
const uuid = require('uuid');

const initialState = fromJS({
    links: [
      // {
      //   description: 'The very library we are working with now',
      //   url: 'https://github.com/facebook/react',
      //   topicName: 'libraries',
      //   id: uuid(),
      //   voteCount: 0,
      //   voters: [],
      // },
      //   {
      //     description: 'Some old videos',
      //     url: 'http://tagtree.io',
      //     topicName: 'apps',
      //     id: uuid(),
      //     voteCount: 0,
      //     voters: [],
      //   },
      //   {
      //     description: 'Go find some news yourself!',
      //     url: 'https://google.com',
      //     topicName: 'news',
      //     id: uuid(),
      //     voteCount: 0,
      //     voters: [],
      //   },
      //   {
      //     description: 'An app to manage your finances',
      //     url: 'https://22seven.com',
      //     topicName: 'apps',
      //     id: uuid(),
      //     voteCount: 0,
      //     voters: [],
      //   }
    ]
  }
);

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS_SUCCESS:
      return state.set('links', action.links);
    default:
      return state;
  }
}

export default linkListContainerReducer;
