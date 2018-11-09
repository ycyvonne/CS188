import React from 'react'
import { css } from 'react-emotion'

const Header = props => (
  <h1
    className={css`
      margin-top: 22px;
      margin-bottom: 16px;
    `}
  >
    {props.children}
  </h1>
)

export default Header
