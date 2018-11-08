import React, { Component } from 'react'
import { css } from 'react-emotion'

import colors from '../global/colors'

class Input extends Component {
  render() {
    return (
      <input
        placeholder="Ex. Vegetables, Chicken, Dairy, etc."
        className={css`
          background: ${colors.darkGray};
          color: rgba(0, 0, 0, 0.4);
          border-radius: 8px;
          border: none;
          width: 100%;
          padding: 16px 10px;
          :focus {
            outline: none;
          }
        `}
      />
    )
  }
}

export default Input
