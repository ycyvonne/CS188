import React, { Component } from 'react'
import { css } from 'react-emotion'

import shadows from '../global/shadows'
import borderRadii from '../global/borderRadii'
import fonts from '../global/fonts'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class Card extends Component {
  state = {
    selectMode: false,
  }

  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={css`
          background: white;
          box-shadow: ${shadows.default};
          border-radius: ${borderRadii.small};
          width: 100%;
          height: 60px;
          display: flex;
          margin-bottom: 15px;
          overflow: hidden;
          cursor: ${!!this.props.onClick ? 'pointer' : 'default'};
        `}
      >
        <div
          className={css`
            background-image: url('${this.props.image}');
            background-size: 120%;
            background-position: 50% 50%;
            height: 100%;
            width: 90px;
          `}
        >
          <div
            className={css`
              opacity: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.4);
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          />
        </div>
        <div
          className={css`
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
          `}
        >
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default Card
