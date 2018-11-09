import React from 'react'
import { css } from 'react-emotion'

const Counter = props => (
  <div
    className={css`
      display: grid;
      grid-template-columns: 1fr 1fr;
    `}
  >
    <label
      className={css`
        justify-self: left;
      `}
    >
      {props.label}
    </label>
    <div>
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </div>
  </div>
)

export default Counter
