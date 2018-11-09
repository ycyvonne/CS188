import React from 'react'
import { css } from 'react-emotion'

import backArrow from '../assets/icons/arrow-dark.png'

const Page = props => (
  <div
    className={css`
      display: flex;
      align-items: flex-start;
      justify-content: center;
    `}
  >
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        max-width: 480px;
        padding: 24px 16px;
      `}
    >
      {props.backButton && (
        <div
          className={css`
            width: 100%;
          `}
        >
          <img
            src={backArrow}
            className={css`
              width: 30px;
              height: 30px;
            `}
          />
        </div>
      )}
      {props.children}
    </div>
  </div>
)

export default Page
