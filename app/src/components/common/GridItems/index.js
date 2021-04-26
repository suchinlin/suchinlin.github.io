import React from 'react';
import { node, number } from 'prop-types';
import classnames from 'classnames';

import styles from './index.css';

const GridItems = (props) => {
  const {
    children,
    columns,
    gap,
  } = props;

  const itemClass = classnames({
    [styles.columnFull]: columns === 0,
    [styles.columnHalf]: columns === 2,
    [styles.columnThirds]: columns === 3,
  });

  const containerClass = classnames({
    [styles.container]: true,
    [styles.wrap]: columns > 0,
    [styles.gap1]: gap === 1,
    [styles.gap2]: gap === 2,
    [styles.gap3]: gap === 3,
    [styles.gap4]: gap === 4,
  })

  return (
    <div className={containerClass}>
      {React.Children.map(children, (child, index) => <li key={`grid-${index}`} className={itemClass}>{child}</li>)}
    </div>
  );
};

GridItems.propTypes = {
  children: node.isRequired,
  columns: number, // default takes full width and auto grid
  gap: number,
};

GridItems.defaultProps = {
  columns: 0,
  gap: 1,
};

export default GridItems;
