import React from "react";

import SuImage from 'src/assets/su.png';
import styles from './index.css';

export default class CaseStudyTwitter extends React.Component {
  render() {
    return (
      <div className={styles.CaseStudyTwitter}>
        <h1 className="header">ready for some CODING</h1>
        <img className={styles.header} src={SuImage} />
      </div>
    );
  }
}
