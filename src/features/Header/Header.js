import React from 'react';
import styles from './header.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoWrapper}>
      <a href="/" title="Go to homepage of Yoti" className="icon-logo">
        <span className="sr-only">Yoti</span>
      </a>
    </div>
    <div className={styles.rightWrapper}>
      <a href="#connect" className={styles.connectedButton}>
        <div className={styles.connectedButtonInner}>
          <span className="p-xs-r-16">Connected</span>
          <div className="icon-connect-on" />
        </div>
      </a>
      <a className={styles.profileLink} href="/" title="Your profile">
        <img
          src="http://place-sloth.com/75-75.png"
          alt=""
          className={`img-circle ${styles.profileImg}`}
        />
      </a>
    </div>
  </header>
);

export default Header;
