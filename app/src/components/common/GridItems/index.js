import React from 'react';
import { bool, node, number } from 'prop-types';
import classnames from 'classnames';

import styles from './index.css';

const GridItems = (props) => {
  const {
    children,
    columns,
    gap,
    alignTop,
  } = props;

  const containerClass = classnames({
    [styles.container]: true,
    [styles.alignTop]: alignTop,
    [styles.wrap]: columns > 0,
    [styles.gap1]: gap === 1,
    [styles.gap2]: gap === 2,
    [styles.gap3]: gap === 3,
    [styles.gap4]: gap === 4,
  })

  const itemClass = classnames({
    [styles.columnFull]: columns === 0,
    [styles.columnHalf]: columns === 2,
    [styles.columnThirds]: columns === 3,
  });

  return (
    <div className={containerClass}>
      {React.Children.map(children, (child, index) => <div key={`grid-${index}`} className={itemClass}>{child}</div>)}
    </div>
  );
};

GridItems.propTypes = {
  children: node.isRequired,
  columns: number, // default takes full width and auto grid
  alignTop: bool, // uses align-items: flex-start
  gap: number,
};

GridItems.defaultProps = {
  columns: 0,
  alignTop: false,
  gap: 1,
};

export default GridItems;
