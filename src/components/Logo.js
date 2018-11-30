import React, { Component } from 'react'
import { css } from 'react-emotion'
import colors from '../global/colors'

import Button from '../components/Button'

class Logo extends Component {
  render() {
    return (
      <div
        className={css`
          font-size: 100px;
          color: ${colors.white};
          font-weight: bold;
          text-shadow: 2px 2px 4px ${colors.gray};
        `}
      >
        spice.
      </div>
    )
  }
}

export default Logo
