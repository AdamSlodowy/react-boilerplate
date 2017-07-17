/**
 *
 * Navigation
 *
 */

import React from 'react';
import styles from './styles.css';
import AppBar from '../AppBar';
import FontAwesome from 'react-fontawesome';

function Navigation({topics, selectedTopic, selectTopic, toggleMenu}) {


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
      {topicNodes}
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
  toggleMenu: React.PropTypes.func.isRequired
};

export default Navigation;
