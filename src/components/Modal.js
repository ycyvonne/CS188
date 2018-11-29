import React from 'react'
import { css } from 'react-emotion'

import Button from '../components/Button'

const Modal = ({ handleConfirm, handleClose, show, children }) => {
  const modalStyles = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  `
  const showHideStyle = show
    ? css`
        display: block;
      `
    : css`
        display: none;
      `
  const modalMainStyles = css`
    position: fixed;
    background: white;
    width: 420px;
    height: auto;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

  return (
    <div
      className={css`
        ${modalStyles} ${showHideStyle}
      `}
    >
      <section
        className={css`
          ${modalMainStyles}
        `}
      >
        <div
          className={css`
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            padding: 10px;
          `}
        >
          <Button
            className={css`
              justify-self: right;
            `}
            light={true}
            type="x"
            onClick={handleClose}
          />
          {children}
          <Button
            className={css`
              justify-self: center;
            `}
            type="confirm"
            onClick={handleConfirm}
          />
        </div>
      </section>
    </div>
  )
}

export default Modal
