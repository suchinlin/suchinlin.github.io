import React from "react";

import Svg from "components/common/Svg";
import styles from "./index.css";

const year = new Date().getFullYear();

const Footer = () => {
  const trackBehanceFooterClick = () => {
    window.gtag("event", "footer_behance_click");
  };

  const trackLinkedinFooterClick = () => {
    window.gtag("event", "footer_linkedin_click");
  };

  return (
    <footer className={styles.footer}>
      <a
        onClick={trackBehanceFooterClick}
        href="https://www.behance.net/suchinux"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Svg className={styles.socialIcon} image="behance" />
      </a>
      <a
        onClick={trackLinkedinFooterClick}
        href="https://www.linkedin.com/in/suchinlin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Svg className={styles.socialIcon} image="linkedin" />
      </a>
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
