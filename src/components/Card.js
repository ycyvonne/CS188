import React, { Component } from 'react'
import { css } from 'react-emotion'
import '../assets/style.css'

import shadows from '../global/shadows'
import numbers from '../global/numbers'
import fonts from '../global/fonts'
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class Card extends Component {
  constructor(props) {
    super(props)
    this.parentRef = React.createRef()
    this.toggleSelectMode = this.toggleSelectMode.bind(this)
    this.toggleSelect = this.toggleSelect.bind(this)

    this.state = {
      selectMode: false,
    }
  }

  toggleSelectMode() {
    $(this.parentRef.current)
      .find('.card-selection-overlay')
      .toggleClass('select-mode')
    this.setState({ selectMode: !this.state.selectMode })
  }

  toggleSelect() {
    if (this.state.selectMode) {
      $(this.parentRef.current)
        .find('.card-selection-overlay')
        .toggleClass('selected')
    }
  }

  render() {
    return (
      <div
        ref={this.parentRef}
        onClick={this.toggleSelect}
        className={
          'card ' +
          css`
            background: white;
            box-shadow: ${shadows.default};
            border-radius: ${numbers.borderRadius};
            width: 100%;
            height: 60px;
            display: flex;
            margin-bottom: 15px;
            overflow: hidden;
          `
        }
      >
        <div
          className={
            'card-image ' +
            css`
            background-image: url('${this.props.image}');
            background-size: 120%;
            background-position: 50% 50%;
            height: 100%;
            width: 90px;
          `
          }
        >
          <div
            className={
              'card-selection-overlay ' +
              css`
                opacity: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
              `
            }
          >
            <div
              className={
                'card-selection-circle ' +
                css`
                  width: 35px;
                  height: 35px;
                  border-radius: 50%;
                  border: 3px solid white;
                  background: rgba(0, 0, 0, 0);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  cursor: pointer;
                `
              }
            >
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
        <div
          className={
            'card-text ' +
            css`
              padding: 16px;
              font-size: 14px;
              font-family: ${fonts.header};
              font-weight: bold;
              display: flex;
              align-items: center;
              flex-grow: 1;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            `
          }
        >
          {this.props.text}
        </div>
        {this.props.quantity && (
          <div
            className={
              'card-quantity ' +
              css`
                height: 100%;
                width: auto;
                padding: 20px;
                display: flex;
                align-items: center;
                font-family: ${fonts.header};
                font-weight: bold;
              `
            }
          >
            {this.props.quantity}
          </div>
        )}
      </div>
    )
  }
}

export default Card
