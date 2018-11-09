import React, { Component } from 'react'
import { css } from 'react-emotion'

import Page from '../components/Page'
import Input from '../components/Input'
import Header from '../components/Header'
import Divider from '../components/Divider'

import searchButton from '../assets/icons/search.png'
import searchBarcode from '../assets/icons/search-barcode.png'

class RecipeSearch extends Component {
  render() {
    return (
      <Page backButton={true}>
        <Header>What ingredient are you looking for?</Header>
        <Input />
        <img
          src={searchButton}
          className={css`
            width: 100%;
          `}
        />
        <Divider />
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
