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
    const themeStyles = this.props.light
      ? css`
          background: white;
          color: red;
        `
      : css`
          background: red;
          color: white;
        `

    let renderSymbol
    switch (this.props.type) {
      case 'plus':
        break

      case 'minus':
        break
      case 'trash':
        break
      case 'cook':
        break

      default:
        break
    }

    return (
      <button
        className={css`
          ${themeStyles}
          border-radius: 50%;
          box-shadow: ${shadows.default};
          font-size: 40px;
          font-weight: bold;
          width: ${this.props.type === 'cook' ? '140px' : '64px'};
          height: 64px;
          border: none;
          cursor: pointer;
          :focus {
            outline: none;
          }
        `}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button
