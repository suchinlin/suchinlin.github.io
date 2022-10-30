import React from 'react';
import { Link } from "react-router-dom";

import Svg from "components/common/Svg";
import resumeFile from "assets/suchin_lin_resume.pdf";

import styles from './index.css';

const Header = () => {
  const trackWorkNavClick = () => {
    window.gtag('event', 'nav_work_click');
  }
  const trackAboutNavClick = () => {
    window.gtag('event', 'nav_about_click');
  }
  const trackContactNavClick = () => {
    window.gtag('event', 'nav_contact_click');
  }
  const trackResumeNavClick = () => {
    window.gtag('event', 'nav_resume_click');
  }

  return (
    <header className={`${styles.header} with-content-padding`}>
      <div className={styles.contentContainer}>
        <div className={styles.navItem}>
          <Link className={styles.navItemLink} onClick={trackWorkNavClick} to="/#work" replace>work</Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navItemLink} onClick={trackAboutNavClick} to="/#about">About</Link>
        </div>
        <div className={styles.navItem}>
          <Svg className={styles.logo} icon="logo" />
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navItemLink} onClick={trackContactNavClick} to="/#contact" replace>Contact</Link>
        </div>
        <div className={styles.navItem}>
          <a
            className={styles.navItemLink}
            onClick={trackResumeNavClick}
            target="_blank"
            rel="noopener noreferrer"
            href={resumeFile}
          >
            Resume
          </a>
        </div>
      </div>

    </header>
  );
};

Header.propTypes = {
};

Header.defaultProps = {
};

export default Header;
