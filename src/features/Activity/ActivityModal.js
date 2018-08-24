import React, { Component } from 'react';
import moment from 'moment';
import { Modal } from '@features/Modal';
import styles from './activityModal.scss';

function prettifyAttributeKey(key) {
  switch (key) {
    case 'address':
      return 'Adress';
    case 'age':
      return 'Age';
    case 'given-names':
      return 'Given name(s)';
    case 'selfie':
      return 'Selfie';
    case 'email-address':
      return 'Email';
    case 'mobile-number':
      return 'Mobile number';
    case 'gender':
      return 'Gender';
    default:
      return key.replace('_', ' ');
  }
}

export default class ActivityModal extends Component {
  render() {
    const { type, application = {}, transaction } = this.props;
    const { appearance = {} } = application;
    const { 'bg-img': bgImg, 'bg-color': bgColor } = appearance;
    const isApplication = type === 'application';
    const isShare = type === 'share';

    const date = moment.unix(transaction['unix-timestamp']);

    return (
      <Modal {...this.props}>
        {isApplication && (
          <header
            className={styles.header}
            style={{
              background: `${bgColor} url(${bgImg}) no-repeat 50% 50%`,
              backgroundSize: '200px',
            }}
          />
        )}
        <div className={styles.content}>
          <div className={styles.selfieWrapper}>
            <img className={styles.selfie} src="http://place-sloth.com/75-75.png" alt="" />
          </div>
          <div className="icon-receipt-confirmed inline-block" />
          <h3>{isShare ? 'Yoti shared' : application.name}</h3>
          {isApplication && <div>viewed this information about you</div>}
          <div>
            at {date.format('LT')} on {date.format('LL')}
          </div>
          <dl className={styles.attributes}>
            {transaction.attributes.map(attribute => (
              <div className={styles.attributes__item} key={Object.keys(attribute)}>
                <dt className={styles.attributes__key}>
                  {prettifyAttributeKey(...Object.keys(attribute))}
                </dt>
                {attribute.selfie && typeof attribute.selfie === 'string' ? (
                  <img src={attribute.selfie} alt="" />
                ) : (
                  <dd className={styles.attributes__value}>{Object.values(attribute)}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </Modal>
    );
  }
}
