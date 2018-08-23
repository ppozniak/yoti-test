import React from 'react';
import styles from './sidebar.scss';

const MenuItem = () => (
  <li className={styles.sidebar__item}>
    <a href="#activity" className={styles.sidebar__link}>
      <div className="icon-activity" />
      <span className="p-xs-l-16">Activity</span>
    </a>
  </li>
);

const Sidebar = () => (
  <nav className={styles.sidebar}>
    <ul className={styles.sidebar__list}>
      <MenuItem />
    </ul>
  </nav>
);

export default Sidebar;
