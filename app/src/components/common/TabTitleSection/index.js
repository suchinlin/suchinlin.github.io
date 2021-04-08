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
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

TabTitleSection.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
};

TabTitleSection.defaultProps = {
};

export default TabTitleSection;
