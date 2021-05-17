import React from "react";
import { bool, shape } from 'prop-types';

import CaseStudyCard from "components/common/CaseStudyCard";
import GridItems from "components/common/GridItems";
import withWindowResize from "components/common/withWindowResize";

import hashTagSu from "assets/images/hash_tag_su.png";

import styles from "./index.css";


class Home extends React.Component {

  render() {
    const {
      size: { isMobile }
    } = this.props;

    return (
      <div className={`${styles.home} with-content-padding`}>
        <div className={styles.introCard}>
          <div className={styles.leftContent}>
            <h1 className={styles.name}>
              Suchin Lin
            </h1>
            <div className={styles.middleText}>
              <div>SF-based</div>
              <div className={styles.title}>User Experience Designer</div>
            </div>

            <div className={styles.bottomText}>
              Inspired by similarities,<br/>
              Intrigued by differences,<br/>
              Impelled by peoples’ needs.
            </div>

          </div>

          <div className={styles.imageContainer}>
            <img className={styles.image} src={hashTagSu} />
          </div>
        </div>

        <p className={styles.introText}>
          With my 10 years of experience in healthcare,<br/>
          I love applying my compassion, creativity, and precision<br/>
          to design satisfying experiences for people.
        </p>

        <div className="divider">
          Works
        </div>

        <GridItems columns={ isMobile ? 1 : 2} gap={4}>
          <CaseStudyCard name="protweet"/>
          <CaseStudyCard name="mada"/>
          <CaseStudyCard name="baymade"/>
        </GridItems>
      </div>
    );
  }
}

Home.propTypes = {
  size: shape({ isMobile: bool }).isRequired,
};

Home.defaultProps = {};

export default withWindowResize(Home);