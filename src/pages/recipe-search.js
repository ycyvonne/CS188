import React, { Component } from 'react'
import { css } from 'react-emotion'
import Input from '../components/Input'

import backArrow from '../assets/icons/arrow-dark.png'
import searchButton from '../assets/icons/search.png'
import searchBarcode from '../assets/icons/search-barcode.png'

class RecipeSearch extends Component {
  render() {
    return (
      <div>
        <img
          src={backArrow}
          className={css`
            width: 30px;
            height: 30px;
          `}
        />
        <div
          className={css`
            margin: 10px;
            font-weight: bold;
            font-size: 36px;
          `}
        >
          What ingredient are you looking for?
        </div>
        <Input />
        <img
          src={searchButton}
          className={css`
            width: 100%;
          `}
        />
        <img
          src={searchBarcode}
          className={css`
            width: 100%;
          `}
        />
      </div>
    )
  }
}

export default RecipeSearch
