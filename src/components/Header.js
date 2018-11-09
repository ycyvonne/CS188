import React from 'react'
import { css } from 'react-emotion'

const Header = props => (
  <h1
    className={css`
      width: 100%;
      text-align: left;
      margin-top: 22px;
      margin-bottom: 16px;
      ${props.style}
    `}
  >
    {props.children}
  </h1>
)

export default Header
