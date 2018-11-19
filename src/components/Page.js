import React from 'react'
import { css } from 'react-emotion'

import backArrow from '../assets/icons/arrow-left.svg'

const Page = props => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
      padding: 24px 16px;
      position: relative;
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
    {!!props.bottomBar && props.bottomBar}
  </div>
)

export default Page
