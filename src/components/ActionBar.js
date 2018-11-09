import React, { Component } from 'react'
import { css } from 'react-emotion'
import Button from './Button';
import cookIcon from '../assets/icons/cook.png';

class ActionBar extends Component {
  render() {
    return (
        <div className={"action-bar " + css`
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 20px;
            width: 100%;
        `}>
          <div className={css`
            position: relative;
          `}>
            <Button light={true} width="50px" height="50px">+</Button>
            <img
              src={cookIcon}
              className={css`
                position: absolute;
                right: 0;
                height: 50px;
                cursor: pointer;
              `}/>
          </div>
        </div>
    );
  }
}

export default ActionBar
