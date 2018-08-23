import React, { Component } from 'react';
import ActivityItem from './ActivityItem';
import styles from './activity.scss';

export default class ActivityList extends Component {
  render() {
    return (
      <ul className={styles.activityList}>
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
      </ul>
    );
  }
}
