import React from 'react';
import { Link } from "react-router-dom";

import Svg from "components/common/Svg";

import styles from './index.css';

const Header = () => {
  return (
    <header className={`${styles.header} with-content-padding`}>
      <div className={styles.contentContainer}>
        <div className={styles.leftContent}>
          <Link to="/">
            <Svg className={styles.logo} icon="logo" />
          </Link>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.navItem}>
            <Link className={styles.navItemLink} to="/#work" replace>work</Link>
          </div>
          <div className={styles.navItem}>
            <Link className={styles.navItemLink} to="/about">about</Link>
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
