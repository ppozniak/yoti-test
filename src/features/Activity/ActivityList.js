import React, { Component } from 'react';
import ActivityItem from './ActivityItem';
import styles from './activity.scss';

export default class ActivityList extends Component {
  render() {
    const { receipts } = this.props;
    return (
      <ul className={styles.activityList}>
        {receipts
          .sort((a, b) => {
            if (a.transaction['unix-timestamp'] > b.transaction['unix-timestamp']) return -1;
            if (a.transaction['unix-timestamp'] < b.transaction['unix-timestamp']) return 1;
            return 0;
          })
          .map(({ type, application, transaction }, index) => (
            <ActivityItem
              type={type}
              application={application}
              transaction={transaction}
              key={transaction['unix-timestamp'] + index}
            />
          ))}
      </ul>
    );
  }
}
