import React, { Component } from 'react'
import { css } from 'react-emotion'
import { navigate } from '@reach/router'

import shadows from '../global/shadows'
import pan from '../assets/icons/pan.svg'

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
        renderSymbol = '+'
        break
      case 'minus':
        break
      case 'trash':
        break
      case 'cook':
        renderSymbol = <img src={pan} />
        break

      default:
        break
    }

    return (
      <button
        className={css`
          ${themeStyles}
            display: flex;
          align-items: center;
          justify-content: center;
          border-radius: ${this.props.type === 'cook' ? '32px' : '50%'};
          box-shadow: ${shadows.default};
          font-size: 40px;
          font-weight: bold;
          width: ${this.props.type === 'cook' ? '140px' : '64px'};
          height: 64px;
          border: none;
          text-decoration: none;
          cursor: pointer;
          :focus {
            outline: none;
          }
          ${this.props.className}
        `}
        onClick={() => navigate(this.props.to)}
      >
        {renderSymbol}
      </button>
    )
  }
}

export default Button
