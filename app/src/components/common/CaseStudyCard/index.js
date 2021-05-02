import React from "react";
import { oneOf } from "prop-types";
import classnames from 'classnames';

import proTweetCardImage from "assets/images/protweet_card.png";
import madaCardImage from "assets/images/mada_card.png";
import baymadeCardImage from "assets/images/baymade_card.png";

import GridItems from "components/common/GridItems";

import styles from './index.css';

class CaseStudyCard extends React.Component {

  renderMada() {
    const imageContainerClass = classnames({
      [styles.imageContainer]: true,
      [styles.madaBackground]: true,
    });

    return (
      <div>
        <div className={imageContainerClass}>
          <img className={styles.image} src={madaCardImage} />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.name}>M.A.D.A</div>
          <div className={styles.cardLabelContainer}>
            <GridItems alignTop columns={2}>
              <div className={styles.labelTitle}>Client Research Project</div>
              <div>
                <div className={styles.labelTitle}>Key Highlights</div>
                <div className={styles.labelItems}>
                  <GridItems columns={2}>
                    <div>Desktop-first</div>
                    <div>User Research</div>
                    <div>Usability Testing</div>
                    <div>Low-fidelity prototype</div>
                  </GridItems>
                </div>
              </div>
            </GridItems>
          </div>
        </div>
      </div>
    );
  }

  renderBaymade() {
    const imageContainerClass = classnames({
      [styles.imageContainer]: true,
      [styles.baymadeBackground]: true,
    });

    return (
      <div>
        <div className={imageContainerClass}>
          <img className={styles.image} src={baymadeCardImage} />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.name}>Baymade-Beta</div>
          <div className={styles.cardLabelContainer}>
            <GridItems alignTop columns={2}>
              <div className={styles.labelTitle}>Concept Project</div>
              <div>
                <div className={styles.labelTitle}>Key Highlights</div>
                <div className={styles.labelItems}>
                  <GridItems columns={2}>
                    <div>Desktop-first</div>
                    <div>Information Architecture</div>
                    <div>E-commerce Design</div>
                    <div>Low-fidelity prototype</div>
                  </GridItems>
                </div>
              </div>
            </GridItems>
          </div>
        </div>
      </div>
    );
  }

  renderCard(name) {
    switch (name) {
      case "mada":
        return this.renderMada();
      case "baymade":
        return this.renderBaymade();
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
  name: oneOf(["mada", "baymade"]).isRequired,
};

export default CaseStudyCard;
