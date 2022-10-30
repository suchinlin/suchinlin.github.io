import React from 'react';
import { Link } from "react-router-dom";

import Svg from "components/common/Svg";

import styles from './index.css';

const Header = () => {

  const trackHeaderLogoClick = () => {
    window.gtag('event', 'header_logo_click');
  }

  const trackWorkNavClick = () => {
    window.gtag('event', 'work_nav_click');
  }

  const trackAboutNavClick = () => {
    window.gtag('event', 'about_nav_click');
  }

  return (
    <header className={`${styles.header} with-content-padding`}>
      <div className={styles.contentContainer}>
        <div className={styles.leftContent}>
          <Link onClick={trackHeaderLogoClick} to="/">
            <Svg className={styles.logo} icon="logo" />
          </Link>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.navItem}>
            <Link className={styles.navItemLink} onClick={trackWorkNavClick} to="/#work" replace>work</Link>
          </div>
          <div className={styles.navItem}>
            <Link className={styles.navItemLink} onClick={trackAboutNavClick} to="/about">about</Link>
          </div>
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
