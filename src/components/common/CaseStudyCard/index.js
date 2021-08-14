import React from "react";
import { oneOf } from "prop-types";
import { Link } from "react-router-dom";

import proTweetCardImage from "assets/images/protweet_card.png";
import madaCardImage from "assets/images/mada_card.png";

import GridItems from "components/common/GridItems";

import styles from './index.css';

class CaseStudyCard extends React.Component {

  renderMada() {
    return (
      <Link className={styles.cardLinkContainer} to="/case-study/mada">
        <div className={styles.imageContainer}>
          <img className={styles.image} src={madaCardImage} />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.name}>M.A.D.A</div>
          <div className={styles.cardLabelContainer}>
            <GridItems alignTop columns={1}>
              <div className={styles.labelTitle}>Client research project</div>
              <div>
                <div className={styles.labelTitle}>Key highlights</div>
                <div className={styles.labelItems}>
                  <GridItems columns={2} gap={0}>
                    <div>Desktop-first</div>
                    <div>User research</div>
                    <div>Usability testing</div>
                    <div>Low-fidelity prototype</div>
                  </GridItems>
                </div>
              </div>
            </GridItems>
          </div>
        </div>
      </Link>
    );
  }

  renderProTweet() {
    return (
      <Link className={styles.cardLinkContainer} to="/case-study/protweet">
        <div className={styles.imageContainer}>
          <img className={styles.image} src={proTweetCardImage} />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.name}>Pro-Tweets</div>
          <div className={styles.cardLabelContainer}>
            <GridItems alignTop columns={1}>
              <div className={styles.labelTitle}>Concept project</div>
              <div>
                <div className={styles.labelTitle}>Key highlights</div>
                <div className={styles.labelItems}>
                  <GridItems columns={2} gap={0}>
                    <div>Mobile-first</div>
                    <div>Feature design</div>
                    <div>UI/Interaction design</div>
                    <div>High-fidelity prototype</div>
                  </GridItems>
                </div>
              </div>
            </GridItems>
          </div>
        </div>
      </Link>
    );
  }

  renderCard(name) {
    switch (name) {
      case "mada":
        return this.renderMada();
      case "protweet":
        return this.renderProTweet();
    }
  }

  render() {
    const { name } = this.props;
    return (
      <div className={styles.container}>
        {this.renderCard(name)}
      </div>
    );
  }
}

CaseStudyCard.propTypes = {
  name: oneOf(["mada", "protweet"]).isRequired,
};

export default CaseStudyCard;
