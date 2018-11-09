import React from 'react'
import { css } from 'react-emotion'

import backArrow from '../assets/icons/arrow-dark.png'
import ActionBar from '../components/ActionBar'

const Page = props => (
  <div
    className={css`
      display: flex;
      align-items: flex-start;
      justify-content: center;
      height: 100vh;
    `}
  >
    <div
      className={css`
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
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
      <ActionBar/>
    </div>
  </div>
)

export default Page
