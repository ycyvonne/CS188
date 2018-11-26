import React, { Component } from 'react'
import { css } from 'react-emotion'

import Page from '../components/Page'
import Header from '../components/Header'

class RecipeSearchResults extends Component {
  render() {
    return (
      <Page backButton={true}>
        <Header>Results based off your ingredients</Header>
      </Page>
    )
  }
}

export default RecipeSearchResults
