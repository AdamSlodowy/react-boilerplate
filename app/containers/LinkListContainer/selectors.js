import { createSelector } from 'reselect';

/**
 * Direct selector to the linkListContainer state domain
 */
const selectLinkListContainerDomain = () => state => state.get('linkListContainer');
// const selectSelectedTopic = () => state => state.get('navigationContainer').get('selectedTopic');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LinkListContainer
 */

const selectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain(),
  (substate) => substate.toJS()
);

export default selectLinkListContainer;
export {
  selectLinkListContainerDomain
};
