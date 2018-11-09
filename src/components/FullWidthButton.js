import React from 'react'
import { css } from 'react-emotion'

const FullWidthButton = props => (
  <div
    className={css`
      border-radius: 32px;
      background-color: #fb3640;
      box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
      width: 100%;
      color: white;
      font-weight: bold;
    `}
  >
    <div>{props.title}</div>
  </div>
)

export default FullWidthButton
