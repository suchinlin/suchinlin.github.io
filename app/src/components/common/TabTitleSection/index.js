import React from 'react';
import { bool, node, string } from 'prop-types';
import classnames from 'classnames';

import styles from './index.css';

const TabTitleSection = (props) => {
  const {
    title,
    simple,
    children,
  } = props;

  const containerClass = classnames({
    [styles.container]: true,
    [styles.simple]: simple,
  });

  return (
    <div className={containerClass}>
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
  simple: bool,
  children: node.isRequired,
};

TabTitleSection.defaultProps = {
  simple: false,
};

export default TabTitleSection;
