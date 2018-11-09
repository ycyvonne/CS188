import React from 'react'
import { css } from 'react-emotion'

const Tag = props => (
  <span
    className={css`
      border-radius: 8px;
      background-color: #ffffff;
      box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
      padding: 10px 16px;
      margin-right: 8px;
      margin-bottom: 8px;
      white-space: nowrap;
      display: inline-block;
    `}
  >
    {props.children}
  </span>
)

export default Tag
