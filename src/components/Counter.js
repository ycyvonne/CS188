import React from 'react'
import { css } from 'react-emotion'

import Button from './Button'

const Counter = props => (
  <div
    className={css`
      display: grid;
      width: 100%;
      grid-template-columns: ${!!props.label ? '1fr 1fr' : '1fr'};
      margin: 30px 0;
      align-items: center;
      justify-content: center;
    `}
  >
    {props.label && (
      <label
        className={css`
          justify-self: left;
          font-weight: bold;
          text-align: left;
        `}
      >
        {props.label}
      </label>
    )}
    <div
      className={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;
        text-align: center;
      `}
    >
      <Button light={true} width="50px" height="50px">
        -
      </Button>
      <span
        className={css`
          font-size: 48px;
          font-weight: bold;
        `}
      >
        1
      </span>
      <Button light={true} width="50px" height="50px">
        +
      </Button>
    </div>
  </div>
)

export default Counter
