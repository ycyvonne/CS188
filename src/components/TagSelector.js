import React from 'react'
import { css } from 'react-emotion'

import Tag from './Tag'

const TagSelector = props => (
  <div
    className={css`
      width: 100%;
      font-weight: bold;
    `}
  >
    <label>{props.label}</label>
    <div
      className={css`
        margin-top: 10px;
      `}
    >
      <Tag>Vegetarian</Tag>
      <Tag>Kosher</Tag>
      <Tag>Halal</Tag>
      <Tag>Lactose-Intolerant</Tag>
      <Tag>Vegan</Tag>
    </div>
  </div>
)

export default TagSelector
