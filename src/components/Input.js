import React, { Component } from 'react'
import { css } from 'react-emotion'

import colors from '../global/colors'
import numbers from '../global/numbers'

class Input extends Component {
  render() {
    return (
      <input
        placeholder="Ex. Vegetables, Chicken, Dairy, etc."
        className={css`
          background: ${colors.darkGray};
          border-radius: ${numbers.borderRadius};
          border: none;
          width: 100%;
          padding: 16px 10px;
          font-size: 14px;
          color: black;
          font-weight: bold;
          :focus {
            outline: none;
          }
          :placeholder-shown {
            color: rgba(0, 0, 0, 0.4);
            font-weight: normal;
          }
        `}
      />
    )
  }
}

export default Input
