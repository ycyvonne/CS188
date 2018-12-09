import React from 'react'
import loadingGif from '../assets/images/loading.gif'
import { css } from 'react-emotion'

const Loading = props => (
  <>
    <img
      src={loadingGif}
      alt="Loading..."
      className={css`
        position: absolute;
        z-index: 2;
        top: 50%;
        transform: translateY(-50%);
        width: 200px;
      `}
    />
    <div
      className={css`
        position: absolute;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 1;
      `}
    />
  </>
)

export default Loading
