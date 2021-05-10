import React, { useState }  from 'react';
import { Link } from "react-router-dom";

import Svg from "components/common/Svg";

import styles from './index.css';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <footer className={styles.footer}>
      <div className={`${styles.contentContainer} with-content-padding`}>
        <div className={styles.header}>
          <Link to="/" className={styles.footerHomeLink}>suchinlin</Link>
        </div>
        <div className={styles.subContent}>
          <div className={styles.leftContent}>
            This portfolio has been crafted 100%  CMS-free with love & care.<br/>
            Thank you for taking time out to come by & get to know me.
          </div>
          <div className={styles.rightContent}>
            <div className={styles.rightTitle}>Would you like to design with me?</div>
            <div className={styles.contactContainer}>
              <div>Feel free to reach out to connect!</div>
              <a
                className={styles.socialContact}
                href="mailto:iamsuchinlin@gmail.com"
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
                iamsuchinlin@gmail.com
              </a>
              <a
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
