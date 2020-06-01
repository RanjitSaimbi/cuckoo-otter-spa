import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module'

const Modal = ({ isOpen, child, toggleModal }) =>
  isOpen
    ? ReactDOM.createPortal(
      <>
        <div className={styles.modalOverlay} />
        <div className={styles.modalWrapper}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <button onClick={toggleModal}>
                <span>&times;</span>
              </button>
            </div>
            {child}
          </div>
        </div>
      </>,
      document.body
    )
    : null

export default Modal
