import React from 'react';
import { node, string } from 'prop-types';

import styles from './index.css';

const TabTitleSection = (props) => {
  const {
    title,
    children,
  } = props;

  return (
    <div className={styles.container}>
      {
        title ?
          <div className={`${styles.title} ibm-plex-serif`}>{title}</div>
        :
          <div className={styles.emptyTitle}/>
      }
      <div className={styles.content}>{children}</div>
    </div>
  );
};

TabTitleSection.propTypes = {
  title: string,
  children: node.isRequired,
};

TabTitleSection.defaultProps = {
};

export default TabTitleSection;
