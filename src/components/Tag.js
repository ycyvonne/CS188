import React from 'react'
import { css } from 'react-emotion'
import shadows from '../global/shadows'
import x from '../assets/icons/x2.svg'

const Tag = props => (
  <span
    className={css`
      display: inline-flex;
      align-items: center;
      border-radius: 8px;
      background-color: #ffffff;
      box-shadow: ${shadows.default};
      padding: 10px 16px;
      margin-right: 8px;
      margin-bottom: 8px;
      white-space: nowrap;
      font-weight: bold;
    `}
  >
    {props.children}
    <img 
      src={x}
      alt="delete this ingredient"
      onClick={props.onClick}
      className={css`
      padding: 10px;
      height: 34px;
      cursor: pointer;
    `}/>
  </span>
)

export default Tag
