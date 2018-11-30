import React, { Component } from 'react'
import { css } from 'react-emotion'

import colors from '../global/colors'

import Tag from './Tag';
import FullWidthButton from '../components/FullWidthButton'

class TempSelectionBox extends Component {

  render() {
    return (
      <div className={css`
        position: absolute;
        bottom: 0;
        background: ${colors.red};
        width: 100%;
        height: 170px;
        padding: 20px 0;
      `}>
        <div className={css`
            height: 70px;
            overflow: hidden;
        `}>
            <div className={css`
                width: 100%;
                overflow: scroll;
                height: 90px;
            `}>
                <div className={css`
                    margin-left: 20px;
                    padding-right: 20px;
                    width: max-content;
                `}>
                    {this.props.selections.map((ingredient, i) => <Tag key={i}>{ingredient.name}</Tag>)}
                </div>
            </div>
        </div>
        <div className={css`
            width: 100%;
            padding: 10px 20px;
        `}>
            <FullWidthButton label="Add to List" to="/user/ingredients" light={true}/>
        </div>
      </div>
    )
  }
}

export default TempSelectionBox;