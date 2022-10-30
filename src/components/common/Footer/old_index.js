import React, { useState }  from 'react';
import { Link } from "react-router-dom";

import Svg from "components/common/Svg";

import styles from './index.css';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const trackFooterLogoClick = () => {
    window.gtag('event', 'footer_logo_click');
  }

  const trackSendEmailClick = () => {
    window.gtag('event', 'send_email_link_click');
  }

  const trackLinkedInClick = () => {
    window.gtag('event', 'linkedIn_link_click');
  }

  return (
    <footer className={styles.footer}>
      <div className={`${styles.contentContainer} with-content-padding`}>
        <div className={styles.logoContainer}>
          <Link onClick={trackFooterLogoClick} to="/">
            <Svg className={styles.logo} icon="logo" />
          </Link>
        </div>
        <div className={styles.subContent}>
          <div className={styles.leftContent}>
            This site was personally designed with love and care, CMS free.<br/>
            Thank you for taking time out to come by & get to know me.
          </div>
          <div className={styles.rightContent}>
            <div className={styles.rightTitle}>Would you like to design with me?</div>
            <div className={styles.contactContainer}>
              <div>Feel free to reach out to connect!</div>
              <a
                onClick={trackSendEmailClick}
                className={styles.socialContact}
                href="mailto:suchinUX@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {
                  isHovered ?
                    <Svg className={styles.emailSvg} image="emailSelected" />
                  :
                    <Svg className={styles.emailSvg} image="email" />
                }
                suchinUX@gmail.com
              </a>
              <a
                onClick={trackLinkedInClick}
                className={styles.socialContact}
                href="https://www.linkedin.com/in/suchinlin"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
        </div>
        </div>
      </div>

    </footer>
  );
};

Footer.propTypes = {
};

Footer.defaultProps = {
};

export default Footer;
