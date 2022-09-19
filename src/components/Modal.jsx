import React from 'react';
import Portal from './Portal';

const Modal = ({ modalActive, setModalActive, children }) => {
  return (
    <Portal>
      <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
        <div
          className={modalActive ? 'modal__content' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
