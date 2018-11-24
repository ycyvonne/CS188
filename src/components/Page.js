import React from 'react'
import { css } from 'react-emotion'

import LeftArrow from './LeftArrow'
import colors from '../global/colors'

const Page = props => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
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
        <LeftArrow color={colors.black} />
      </div>
    )}
    {props.children}
    {!!props.bottomBar && (
      <div
        className={css`
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        `}
      >
        {props.bottomBar}
      </div>
    )}
  </div>
)

export default Page
