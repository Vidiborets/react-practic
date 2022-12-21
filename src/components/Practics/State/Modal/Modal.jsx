import { ModalBackDrop, WindowModal } from './Modal.styled';
import React from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keydownHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydownHandler);
  }

  keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        this.props.onClose();
        break;
      default:
    }
  };
  handleClickBackDrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackDrop onClick={this.handleClickBackDrop}>
        <WindowModal>{this.props.children}</WindowModal>
      </ModalBackDrop>,
      modalRoot,
    );
  }
}
