import React from 'react'
import spilledMilk from '../assets/images/spilled_milk.png'
import { css } from 'react-emotion'
import fonts from '../global/fonts'
import colors from '../global/colors'

const Error = props => (
  <div
    className={css`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-family: ${fonts.body};
      font-weight: bold;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `}
  >
    <img
      src={spilledMilk}
      alt={props.title}
      className={css`
        width: 200px;
      `}
    />
    <p
      className={css`
        font-size: 24px;
        margin: 20px 0 0 0;
      `}
    >
      {props.title}
    </p>
    <p
      className={css`
        font-size: 18px;
        width: 280px;
        color: ${colors.gray};
      `}
    >
      {props.message}
    </p>
  </div>
)

export default Error
