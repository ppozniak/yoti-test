import React, { Component } from 'react';
import styles from './modal.scss';

export default class Modal extends Component {
  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>{this.props.children}</div>
      </div>
    );
  }
}
