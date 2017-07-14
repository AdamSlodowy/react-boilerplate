/**
*
* LinkList
*
*/

import React from 'react';


import styles from './styles.css';

function LinkList({links}) {

  const linksNode = links.map((link) => (
    <p key={link.id}><a href={link.url}>{link.description}</a></p>
  ));
  return (
    <div className={styles.linkList}>
    <ul>{linksNode}</ul>
    </div>
  );
}

export default LinkList;
