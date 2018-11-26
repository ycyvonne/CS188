import React, { Component } from 'react'
import { css } from 'react-emotion'
import { navigate } from '@reach/router'

import shadows from '../global/shadows'
import colors from '../global/colors'
import margins from '../global/margins'
import pan from '../assets/icons/pan.svg'
import check from '../assets/icons/check.svg'
import trash from '../assets/icons/trash.png'
import x from '../assets/icons/x.svg'

/*
types:
"plus"
"minus"
"trash"
"cook"
"x"
"select"
*/

class Button extends Component {
  render() {
    const themeStyles = this.props.light
      ? css`
          background: ${colors.white};
          color: ${colors.red};
        `
      : css`
          background: ${colors.red};
          color: ${colors.white};
        `

    let renderSymbol
    let borderRadius = '50%'
    let width = '64px'
    let height = width
    switch (this.props.type) {
      case 'plus':
        renderSymbol = '+'
        break
      case 'minus':
        renderSymbol = '-'
        break
      case 'trash':
        renderSymbol = <img src={trash} />
        break
      case 'cook':
        renderSymbol = <img src={pan} />
        borderRadius = '32px'
        width = '140px'
        break
      case 'x':
        renderSymbol = <img src={x} />
        break
      case 'select':
        renderSymbol = (
          <div
            className={css`
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 18px;
              color: ${colors.black};
            `}
          >
            <img src={check} />
            <span
              className={css`
                margin-left: ${margins.xtiny};
              `}
            >
              Select
            </span>
          </div>
        )
        borderRadius = '32px'
        width = '100px'
        height = '40px'
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
          border-radius: ${borderRadius};
          box-shadow: ${shadows.default};
          font-size: 40px;
          font-weight: bold;
          width: ${width};
          height: ${height};
          border: none;
          text-decoration: none;
          cursor: pointer;
          :focus {
            outline: none;
          }
          ${this.props.className}
        `}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : this.props.to
            ? () => navigate(this.props.to)
            : null
        }
      >
        {renderSymbol}
      </button>
    )
  }
}

export default Button
