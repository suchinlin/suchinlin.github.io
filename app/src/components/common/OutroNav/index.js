import React from 'react';
import { arrayOf, func, number, string } from 'prop-types';
import classnames from 'classnames';

import styles from './index.css';

const OutroNav = (props) => {
  const {
    steps,
    currentStep,
    handleClick,
  } = props;

  return (
    <ul className={styles.container}>
      {
        steps.map((step, index) => {
          const isSelected = index === currentStep;
          const stepClass = classnames({
            [styles.step]: true,
            "ibm-plex-serif": true,
            [styles.currentStep]: isSelected
          });
          return (
            <li className={styles.stepContainer} key={step} onClick={handleClick.bind(this, step)}>
              <div className={stepClass}>
                { isSelected ? <div className={styles.number}>{index + 1}</div> : null }
              </div>
              { !isSelected ? <div className={styles.stepLabel}>{step}</div> : null }
              { isSelected ? <div className={styles.stepLabelSelected}>{step}</div> : null }
            </li>
          )
        })
      }
    </ul>
  );
};

OutroNav.propTypes = {
  steps: arrayOf(string).isRequired,
  currentStep: number,
  handleClick: func,
};

OutroNav.defaultProps = {
  currentStep: 0,
  handleClick: () => {}
};

export default OutroNav;
