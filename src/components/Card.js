import React, { Component } from 'react'
import { css } from 'react-emotion'

import shadows from '../global/shadows'
import numbers from '../global/numbers'
import fonts from '../global/fonts'

class Card extends Component {
  render() {
    return (
      <div
        className={css`
          background: white;
          box-shadow: ${shadows.default};
          border-radius: ${numbers.borderRadius};
          width: 100%;
          height: 70px;
          display: flex;
          margin-bottom: 15px;
          overflow: hidden;
        `}>
        <div
          className={css`
            background-image: url('${this.props.image}');
            background-size: 120%;
            background-position: 50% 50%;
            height: 100%;
            width: 90px;
          `}
        />
        <div
          className={css`
            padding: 20px;
            font-size: 20px;
            font-family: ${fonts.header};
            font-weight: bold;
            display: flex;
            align-items: center;
          `}>
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default Card
