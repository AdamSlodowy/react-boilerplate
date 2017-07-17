/**
 *
 * AppBar
 *
 */

import React from 'react';
import FontAwesome from 'react-fontawesome';


import styles from './styles.css';

function AppBar({toggleMenu}) {
  return (
    <div className={styles.appBar}>
      <div className={styles.iconButton}>
        <FontAwesome name="cubes" className={styles.icon} onClick={toggleMenu}/>
      </div>
      <div className={styles.heading}>
        Coder daily
      </div>
      <div className={styles.linkContainer}>
      log in
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleMenu: React.PropTypes.func.isRequired
};

export default AppBar;
