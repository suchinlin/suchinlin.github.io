import React from "react";
import { bool, shape } from 'prop-types';

import Svg from "components/common/Svg";
import withWindowResize from "components/common/withWindowResize";

import styles from "./index.css";
import selfImage from "assets/images/about/about-self.png";
import resumeFile from "assets/resume.pdf";

class About extends React.Component {

  render() {
    const {
      size: { isMobile }
    } = this.props;

    return (
      <div className={`${styles.aboutContainer} with-content-padding`}>
        <h1 className={styles.header}>Hello!</h1>
        {isMobile ? (
          <div className={styles.mobileImage}>
            <img src={selfImage} />
          </div>
        ) : null}
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <p className={styles.introText}>
              I&apos;m Suchin Lin, a user experience designer located in San Francisco.
            </p>
            <p className="margin-top-50">
              I worked in healthcare as a registered nurse for 10 years in my hometown, New York,
              and found I thrived most when applying my compassion, creativity, and attention
              to detail to improve situations for the people around me not just under my care
              but also working directly with me.
            </p>
            <p>
              This led me to UX Design - a field where I can dive headfirst into immersing myself
              into finding meaningful solutions to problems.
            </p>
            <p>
              In San Francisco, I pursued my certification in User Experience Design at
              General Assembly, graduated in April 2020, and with every project and every
              learning moment thereafter, I discovered my re-appreciation for research,
              fascinaton with UI/Interaction design, and deep satisfaction from client
              and user feedback.
            </p>
            <p className="margin-top-50">
              When I am not designing, outside of being a wanderlust, I’m also a proud dog
              mom who enjoys dabbling with digital illustration tools, running, hiking, or
              meditating through mindful street-walking.
            </p>

            <div className={styles.thankNote}>
              Thanks for coming by! <Svg className={styles.heartSvg} image="heart" />
            </div>

            <div className={styles.psNote}>
              <span className={styles.ps}>P.S.</span>
              For a list of my professional works, please <a className={styles.resumeLink} target="_blank" rel="noopener noreferrer" href={resumeFile}>download my resume</a>.
            </div>
          </div>
          {!isMobile ? (
            <div className={styles.image}>
              <img src={selfImage} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

About.propTypes = {
  size: shape({ isMobile: bool }).isRequired,
};

About.defaultProps = {};

export default withWindowResize(About);
