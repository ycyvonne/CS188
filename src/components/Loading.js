import React from 'react'
import loadingGif from '../assets/images/loading.gif';
import { css } from 'react-emotion'

const Loading = props => (
    <img src={loadingGif} alt="Loading..."
        className={css`
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 200px;
  `}/>
)

export default Loading
