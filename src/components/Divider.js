import React from 'react'
import { css } from 'react-emotion'

const Divider = () => (
  <hr
    className={css`
      margin: 16px 0;
      width: 220px;
      color: rgba(0, 0, 0, 0.1);
    `}
  />
)

export default Divider
