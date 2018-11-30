import React, { Component } from 'react'
import { css } from 'react-emotion'

import shadows from '../global/shadows'
import colors from '../global/colors'
import borderRadii from '../global/borderRadii'
import fonts from '../global/fonts'
import checkRed from '../assets/icons/check_red.svg'

class Card extends Component {
  state = {
    selectMode: false,
  }

  render() {
    const backgroundImage =
      (this.props.selectable
        ? `linear-gradient(${colors.gray}, ${colors.gray}), `
        : '') + `url('${this.props.image}')`

    return (
      <div
        onClick={this.props.onClick}
        className={css`
          background: white;
          box-shadow: ${shadows.default};
          border-radius: ${borderRadii.small};
          width: 100%;
          min-height: 60px;
          height: 60px;
          display: flex;
          margin-bottom: 15px;
          overflow: hidden;
          cursor: ${!!this.props.onClick ? 'pointer' : 'default'};
        `}
      >
        <div
          className={css`
            background-image: ${backgroundImage};
            background-size: 120%;
            background-position: 50% 50%;
            height: 100%;
            width: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          {this.props.selectable && (
            <div
              className={css`
                height: 36px;
                width: 36px;
                border: 3px solid #ffffff;
                border-radius: 50%;
                ${this.props.selected ? `background-color: ${colors.red}` : ''}
              `}
            />
          )}
        </div>
        <div
          className={css`
            position: relative;
            padding: 16px;
            font-size: 14px;
            font-family: ${fonts.header};
            font-weight: bold;
            display: flex;
            align-items: center;
            flex-grow: 1;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            max-width: 288px;
          `}
        >
          {this.props.text}
          {this.props.toggledCheck && <img className={css`
            position: absolute;
            right: 0;
          `} src={checkRed} />}
        </div>
      </div>
    )
  }
}

export default Card
