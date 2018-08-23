import React from 'react';
import moment from 'moment';
import ModalTrigger, { Modal } from '@features/Modal';
import styles from './activity.scss';

const ActivityItem = ({ type, transaction, application }) => {
  const date = moment.unix(transaction['unix-timestamp']);

  return (
    <ModalTrigger modal={<Modal />}>
      {({ openModal, closeModal }) => (
        <li className={`${styles.activityItem} m-xs-b-60`}>
          <a onClick={openModal} className={styles.activity__link} href="#item">
            <div className={styles.activity__header}>{date.format('L')}</div>
            <div className={styles.activity__content}>
              <div className="icon-activity-tick">
                <span className="sr-only">Verified</span>
              </div>
              <div className="icon-user-selfie-ph-small" />
              <div className="p-sm-l-20">{type === 'share' ? 'Yoti shared' : application.name}</div>
              <div className={`${styles.activity__date} p2`}>
                <div>{date.format('LT')}</div>
                <div>{date.format('L')}</div>
              </div>
            </div>
          </a>
        </li>
      )}
    </ModalTrigger>
  );
};

export default ActivityItem;
