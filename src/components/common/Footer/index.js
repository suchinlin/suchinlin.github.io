import React  from 'react';

import Svg from "components/common/Svg";
import styles from './index.css';

const year = new Date().getFullYear();

const Footer = () => {
  const trackBehanceFooterClick = () => {
    window.gtag('event', 'footer_behance_click');
  }

  const trackLinkedinFooterClick = () => {
    window.gtag('event', 'footer_linkedin_click');
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.header}>
        THANKS FOR COMING BY!
      </div>
      <div className={styles.subHeader}>
        THIS IS A SELF-MADE PORTFOLIO BUILT WITH LOTS OF LOVE USING FIGMA & GITHUB IN COLLAB WITH AN ENGINEER
      </div>

      <div className={styles.year}>{year}</div>

      <div className={styles.socialContainer}>
        <a onClick={trackBehanceFooterClick} href="https://www.behance.net/suchinux" target="_blank" rel="noopener noreferrer">
          <Svg className={styles.socialIcon} image="behance" />
        </a>
        <a onClick={trackLinkedinFooterClick} href="https://www.linkedin.com/in/suchinlin" target="_blank" rel="noopener noreferrer">
          <Svg className={styles.socialIcon} image="linkedin" />
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
};

Footer.defaultProps = {
};

export default Footer;
