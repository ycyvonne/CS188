import React, { Component } from 'react'
import { css } from 'react-emotion'

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
          box-shadow: 1px 0 20px 6px #eaeaea;
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
