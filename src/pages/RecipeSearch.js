import React, { Component } from 'react'
import { css } from 'react-emotion'

import Page from '../components/Page'
import Input from '../components/Input'
import Header from '../components/Header'

import backArrow from '../assets/icons/arrow-dark.png'
import searchButton from '../assets/icons/search.png'
import searchBarcode from '../assets/icons/search-barcode.png'

class RecipeSearch extends Component {
  render() {
    return (
      <Page>
        <img
          src={backArrow}
          className={css`
            width: 30px;
            height: 30px;
          `}
        />
        <Header>What ingredient are you looking for?</Header>
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
      </Page>
    )
  }
}

export default RecipeSearch
