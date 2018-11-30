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
import plus from '../assets/icons/plus.svg'

/*
types:
"plus"
"minus"
"trash"
"cook"
"x"
"select"
"logout"
"confirm"
"<"
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
        renderSymbol = <img src={plus} />
        break
      case 'minus':
        renderSymbol = '-'
        break
      case 'trash':
        renderSymbol = <img src={trash} />
        break
      case 'x':
        renderSymbol = <img src={x} />
        break
      case '<':
        renderSymbol = (
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <g fill={colors.red} fillRule="evenodd">
              <path d="M32 14.7v2.6c0 .7-.2 1.4-.7 1.9-.5.5-1 .7-1.8.7H14.2l6.3 6c.6.6.8 1.2.8 2 0 .7-.2 1.3-.8 1.8L19 31.2c-.5.5-1.2.8-2 .8-.7 0-1.4-.3-2-.8L.9 17.8c-.5-.5-.8-1-.8-1.8 0-.7.3-1.3.8-1.9L15 .8c.5-.5 1.2-.8 2-.8.7 0 1.3.3 1.9.8l1.6 1.5c.6.5.8 1.1.8 1.9 0 .7-.2 1.3-.8 1.8l-6.3 6h15.3c.7 0 1.3.3 1.8.8s.7 1.2.7 1.9z" />
              <path d="M32 14.7v2.6c0 .7-.2 1.4-.7 1.9-.5.5-1 .7-1.8.7H14.2l6.3 6c.6.6.8 1.2.8 2 0 .7-.2 1.3-.8 1.8L19 31.2c-.5.5-1.2.8-2 .8-.7 0-1.4-.3-2-.8L.9 17.8c-.5-.5-.8-1-.8-1.8 0-.7.3-1.3.8-1.9L15 .8c.5-.5 1.2-.8 2-.8.7 0 1.3.3 1.9.8l1.6 1.5c.6.5.8 1.1.8 1.9 0 .7-.2 1.3-.8 1.8l-6.3 6h15.3c.7 0 1.3.3 1.8.8s.7 1.2.7 1.9z" />
            </g>
          </svg>
        )
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
      case 'cook':
        renderSymbol = (
          <div
            className={css`
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 18px;
              color: ${colors.white};
            `}
          >
            <span
              className={css`
                margin: 0 ${margins.xtiny};
              `}
            >
              Generate
            </span>
            <img src={pan} />
          </div>
        )
        borderRadius = '32px'
        width = '100%'
        height = '70px'
        break
      case 'text':
        renderSymbol = (
          <div
            className={css`
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 18px;
              padding: 0;
            `}
          >
            <span
              className={css`
                margin-left: ${margins.xtiny};
              `}
            >
              {this.props.text}
            </span>
          </div>
        )
        borderRadius = '32px'
        width = '100px'
        height = '50px'
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
          border-radius: ${borderRadius};
          box-shadow: ${shadows.default};
          font-size: 40px;
          font-weight: bold;
          width: ${width};
          height: ${height};
          border: none;
          text-decoration: none;
          opacity: ${this.props.disabled ? 0.4 : 1};
          cursor: ${this.props.disabled ? 'auto' : 'pointer'};
          :focus {
            outline: none;
          }
          ${this.props.className}
        `}
        onClick={
          this.props.onClick && !this.props.disabled
            ? this.props.onClick
            : this.props.to && !this.props.disabled
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
