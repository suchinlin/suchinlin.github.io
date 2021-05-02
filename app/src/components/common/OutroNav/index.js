import React from 'react';
import { arrayOf, func, number, string } from 'prop-types';
import classnames from 'classnames';
import Svg from "components/common/Svg";

import styles from './index.css';

class OutroNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      toggle: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { toggle } = this.state;
    this.setState({toggle: !toggle});
  }

  render() {
    const { toggle } = this.state;
    const {
      steps,
      currentStep,
      progress,
      handleClick,
    } = this.props;

    const imageMapper = {
      discover: "glass",
      define: "target",
      ideate: "lightbulb",
      create: "pen",
      evaluate: "check"
    }

    return (
      <ul className={styles.container}>
        {
          steps.map((step, index) => {
            const isSelected = index === currentStep;
            const stepClass = classnames({
              [styles.svgContainer]: true,
              [styles.currentStep]: isSelected
            });

            const progressbarContainerClass = classnames({
              [styles.progressBarContainer]: true,
              [styles.blinkBar]: isSelected && toggle
            });

            const indexPercentage = { width: `${progress[index]}%` };
            const svgImage = imageMapper[step];
            return (
              <React.Fragment key={step}>
                <li className={styles.stepContainer} onClick={handleClick.bind(this, step)}>
                  <div className={stepClass}>
                    <Svg className={styles.svgImage} image={svgImage} />
                    <div className={styles.stepLabel}>{step}</div>
                  </div>
                </li>
                { index < (steps.length - 1) ?
                  <li className={progressbarContainerClass}>
                    {/* width based css here */}
                    <span className={styles.progressBar} style={indexPercentage}/>
                  </li>
                : null}
              </React.Fragment>
            )
          })
        }
      </ul>
    );
  }
}

OutroNav.propTypes = {
  steps: arrayOf(string).isRequired,
  currentStep: number,
  progress: arrayOf(number).isRequired,
  handleClick: func,
};

OutroNav.defaultProps = {
  currentStep: null,
  handleClick: () => {}
};

export default OutroNav;
