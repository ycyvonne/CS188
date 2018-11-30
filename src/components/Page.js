import React from 'react'
import { css } from 'react-emotion'

import LeftArrow from './LeftArrow'
import colors from '../global/colors'

import margins from '../global/margins'

const Page = props => (
  <div
    className={css`
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: inherit;
      padding: ${margins.small};
      ${props.customClasses}
    `}
  >
    {props.topBar}
    {props.backButton && (
      <div
        className={css`
          width: 100%;
          ${props.backStyles}
        `}
      >
        <LeftArrow color={colors.black} to={props.to} />
      </div>
    )}
    {props.children}
    {!!props.bottomBar && (
      <div
        className={css`
          flex: 1;
          position: fixed;
          display: flex;
          width: inherit;
          flex-direction: column;
          justify-content: flex-end;
          position: fixed;
          left: 50%;
          margin-left: -210px;
          bottom: 10px;
        `}
      >
        {props.bottomBar}
      </div>
    )}
  </div>
)

export default Page
