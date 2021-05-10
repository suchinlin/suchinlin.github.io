import React from 'react';
import { Link } from "react-router-dom";

import styles from './index.css';

const Header = () => {
  return (
    <header className={`${styles.header} with-content-padding`}>
      <div className={styles.contentContainer}>
        <div className={styles.rightContent}>
          <div className={styles.navItem}>
            <Link to="/">work</Link>
          </div>
          <div className={styles.navItem}>
            <Link to="/about">about</Link>
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
