import React, { Component } from 'react'
import { css } from 'react-emotion'

import shadows from '../global/shadows'

/*
types:
"plus"
"minus"
"trash"
"cook"
"x"
*/

class Button extends Component {
  render() {
    return (
      <button
        className={css`
          color: red;
          background: white;
          border-radius: 50%;
          box-shadow: ${shadows.default};
          font-size: 24px;
          font-weight: bold;
          width: 70px;
          height: 70px;
          border: none;
        `}
        onClick={this.props.onClick}
      >
        +
      </button>
    )
  }
}

export default Button
