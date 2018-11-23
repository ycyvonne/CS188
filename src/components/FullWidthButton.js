import React from 'react'
import { css } from 'react-emotion'

import colors from '../global/colors'

const FullWidthButton = props => {
  const themeStyles = props.light
    ? css`
        background: ${colors.white};
        color: ${colors.red};
      `
    : css`
        background: ${colors.red};
        color: ${colors.white};
      `
  return (
    <div
      className={css`
        ${themeStyles}
        border-radius: 32px;
        box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        width: 100%;
        font-weight: bold;
      `}
    >
      <div>{props.label}</div>
    </div>
  )
}

export default FullWidthButton
