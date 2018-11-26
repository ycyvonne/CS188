import React, { Component } from 'react'
import { css } from 'react-emotion'

import Page from '../components/Page'
import Input from '../components/Input'
import Header from '../components/Header'
import Divider from '../components/Divider'
import FullWidthButton from '../components/FullWidthButton'

class IngredientSearch extends Component {
  inputRef = React.createRef()

  state = {
    searchText: '',
  }

  inputTextChange = event => {
    this.setState({ searchText: event.target.value })
  }

  render() {
    return (
      <Page backButton={true}>
        <Header>What ingredient are you looking for?</Header>
        <Input
          ref={this.inputRef}
          autofocus={true}
          placeholder="Ex. Vegetables, Chicken, Dairy, etc."
          value={this.state.searchText}
          onChange={this.inputTextChange}
        />
        <FullWidthButton label="Search" to={this.state.searchText} />
      </Page>
    )
  }
}

export default IngredientSearch
