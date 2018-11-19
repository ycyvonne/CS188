import React, { Component } from 'react'
import { css } from 'react-emotion'

import Page from '../components/Page'
import Input from '../components/Input'
import Header from '../components/Header'
import Divider from '../components/Divider'
import FullWidthButton from '../components/FullWidthButton'

// import searchButton from '../assets/icons/search.png'
import searchBarcode from '../assets/icons/barcode.png'

class RecipeSearch extends Component {
  render() {
    return (
      <Page backButton={true}>
        <Header>What ingredient are you looking for?</Header>
        <Input />
        <FullWidthButton label="Search" />
        <Divider />
        <FullWidthButton
          light={true}
          label={
            <>
              <img src={searchBarcode} />
              Find by Barcode
            </>
          }
        />
      </Page>
    )
  }
}

export default RecipeSearch
