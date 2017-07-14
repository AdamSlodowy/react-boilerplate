/**
 *
 * Navigation
 *
 */

import React from 'react';


import styles from './styles.css';

function Navigation(props) {


  const topicNodes = props.topics.map((t) => (
    <div
      key={t.name}
      onClick={() => props.selectTopic(t.name)}>
      {t.name}
      {(props.selectedTopic === t.name) ?
        ' - ' + t.description  :
        ''}
    </div>
  ));

  return (
    <div className={styles.navigation}>
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
  selectTopic: React.PropTypes.func.isRequired
};

export default Navigation;
