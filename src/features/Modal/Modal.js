import React, { Component } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './modal.scss';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyClose);
  }

  handleKeyClose = event => {
    if (event.keyCode === 27) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={styles.overlay}>
        <OutsideClickHandler onOutsideClick={this.props.closeModal}>
          <div className={styles.modal}>
            <a href="#close" onClick={this.props.closeModal} className={styles.modal__close}>
              <div className="icon-dismiss-light">
                <div className="sr-only">Close modal</div>
              </div>
            </a>
            <div className={styles.modalContent}>{this.props.children}</div>
          </div>
        </OutsideClickHandler>
      </div>
    );
  }
}
