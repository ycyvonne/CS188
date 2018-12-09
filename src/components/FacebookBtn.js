import React from 'react'
import fbLoginBtn from '../assets/images/fb_login.png'
import { css } from 'react-emotion'

const FacebookBtn = props => (
  <img
    src={fbLoginBtn}
    alt="Facebook Login Button"
    onClick={props.onClick}
    className={css`
      width: 80%;
      cursor: pointer;
    `}
  />
)

export default FacebookBtn
