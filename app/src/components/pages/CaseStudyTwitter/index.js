import React from "react";

import SuImage from 'assets/images/su.png';

import Svg from 'components/common/Svg';
import TabTitleSection from 'components/common/TabTitleSection';

import styles from './index.css';


export default class CaseStudyTwitter extends React.Component {

  handleBackClick() {
    // ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <div className={styles.CaseStudyTwitter}>
        <h1 className="header">ready for some CODING</h1>

        <TabTitleSection title="Synopsis">
          Something goes here cool beans
        </TabTitleSection>

        <Svg image="glass" />
        <img className={styles.header} src={SuImage} />
      </div>
    );
  }
}
