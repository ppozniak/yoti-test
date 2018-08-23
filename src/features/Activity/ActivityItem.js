import React from 'react';
import styles from './activity.scss';

const ActivityItem = () => (
  <li className={`${styles.activityItem} m-sm-b-60`}>
    <a className={styles.activity__link} href="#item">
      <div className={styles.activity__header}>Today</div>
      <div className={styles.activity__content}>
        <div className="icon-activity-tick">
          <span className="sr-only">Verified</span>
        </div>
        <div className="icon-user-selfie-ph-small" />
        <div className="p-sm-l-20">Yoti shared</div>
        <div className={`${styles.activity__date} p2`}>
          <div>12:05</div>
          <div>18 July 2017</div>
        </div>
      </div>
    </a>
  </li>
);

export default ActivityItem;
