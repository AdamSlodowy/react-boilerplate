/**
 *
 * Navigation
 *
 */

import React from 'react';
import styles from './styles.css';
import AppBar from '../AppBar';
import FontAwesome from 'react-fontawesome';
import Drawer from '../Drawer';

function Navigation({topics, selectedTopic, selectTopic, toggleMenu, isDrawerOpen}) {


  const topicNodes = topics.map((t) => (
    <div
      key={t.name}
      onClick={() => selectTopic(t.name)}>
      {t.name}
      {(selectedTopic === t.name) ?
        <FontAwesome name="arrow-left" className={styles.arrow}/> :
        ''}
    </div>
  ));

  return (
    <div className={styles.navigation}>
      <AppBar toggleMenu={toggleMenu}/>
      <Drawer
        items = {topics}
        selectItem = {selectedTopic}
        itemLabel = "name"
        itemKey = "name"
        isDrawerOpen = {isDrawerOpen}
      />
    </div>
);
}

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string,
      description: React.PropTypes.string,
    })
  ).isRequired,
  selectTopic: React.PropTypes.func.isRequired,
  toggleMenu: React.PropTypes.func.isRequired,
  React.PropTypes.bool.isRequired
};

export default Navigation;
