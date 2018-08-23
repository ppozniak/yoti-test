import React, { Component } from 'react';

export default class ModalTrigger extends Component {
  state = {
    show: false,
  };

  openModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children({
          openModal: this.openModal,
          closeModal: this.closeModal,
          show: this.state.show,
        })}
        {this.state.show && this.props.modal}
      </React.Fragment>
    );
  }
}
