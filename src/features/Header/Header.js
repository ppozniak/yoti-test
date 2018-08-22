import React from 'react';
import styles from './header.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoWrapper}>
      <a href="/" title="Go to homepage of Yoti" className="icon-logo">
        <span className="sr-only">Yoti</span>
      </a>
    </div>
  </header>
);

export default Header;
