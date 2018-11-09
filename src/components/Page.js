import React from 'react'
import { css } from 'react-emotion'

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
        height: 100%;
        max-width: 480px;
        padding: 24px 16px;
      `}
    >
      {props.children}
    </div>
  </div>
)

export default Page
