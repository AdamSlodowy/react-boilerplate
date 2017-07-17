/**
 *
 * Drawer
 *
 */

import React from 'react';
import classNames from 'classNames ';


import styles from './styles.css';

function Drawer({items, selectItem, itemLabel, itemKey, isDrawerOpen}) {

  const itemNodes = items.map(item => (
    <div
      key={item[itemKey]}
      onClick={() => selectItem(item)}
      className={styles.item}
    >
      {item[itemLabel]}
    </div>
  ));

  return (
    <div
      className={classNames(styles.drawer, {[styles.drawerOpen] : isDrawerOpen}
    >
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLabel: React.PropTypes.string.isRequired,
  itemKey: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
};

export default Drawer;
