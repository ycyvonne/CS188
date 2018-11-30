import React, { Component } from 'react'
import { css } from 'react-emotion'

import colors from '../global/colors'

import Tag from './Tag';
import FullWidthButton from '../components/FullWidthButton'

import { navigate } from '@reach/router'

class TempSelectionBox extends Component {

  handleAddToList = () => {
    this.props.addToList();
    navigate('/user/ingredients');
  }

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
                    {
                        this.props.selections.map((ingredient, i) => {
                            return (<Tag key={i} onClick={() => this.props.removeIngredient(ingredient)}>{ingredient.name}</Tag>)
                        })
                    }
                </div>
            </div>
        </div>
        <div className={css`
            width: 100%;
            padding: 10px 20px;
        `}>
            <FullWidthButton label="Add to List" light={true} onClick={this.handleAddToList}/>
        </div>
      </div>
    )
  }
}

export default TempSelectionBox;