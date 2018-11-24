import React, { Component } from 'react'
import { css } from 'react-emotion'

import Page from '../components/Page'
import Header from '../components/Header'

class IngredientSearchResults extends Component {
  render() {
    return (
      <Page backButton={true}>
        <Header>Results similar to “{this.props.searchTerm}”</Header>
      </Page>
    )
  }
}

export default IngredientSearchResults
