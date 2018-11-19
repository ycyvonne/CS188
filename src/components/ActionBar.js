import React, { Component } from 'react'
import { css } from 'react-emotion'
import Button from './Button'

class ActionBar extends Component {
  render() {
    return (
      <div
        className={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
        `}
      >
        <Button
          className={css`
            justify-self: left;
          `}
          type="plus"
          light={true}
        />
        <Button
          className={css`
            justify-self: right;
          `}
          type="cook"
        />
      </div>
    )
  }
}

export default ActionBar
