import React, { Component } from 'react'
import { navigate } from '@reach/router'

import Page from '../components/Page'
import Input from '../components/Input'
import Header from '../components/Header'
import FullWidthButton from '../components/FullWidthButton'

class IngredientSearch extends Component {
  inputRef = React.createRef()

  state = {
    searchText: '',
  }

  inputTextChange = event => {
    this.setState({ searchText: event.target.value })
  }

  handleInputKeyUp = event => {
    // enter key pressed
    if (event.keyCode == 13) {
        navigate(`/user/ingredient-search/${this.state.searchText}`);
    }
  }

  render() {
    return (
      <Page backButton={true} to="/user/ingredients">
        <Header>What ingredients do you have?</Header>
        <Input
          ref={this.inputRef}
          autoFocus={true}
          placeholder="Ex. Vegetables, Chicken, Dairy, etc."
          value={this.state.searchText}
          onChange={this.inputTextChange}
          onKeyUp={this.handleInputKeyUp}
        />
        <FullWidthButton label="Search" to={this.state.searchText} />
      </Page>
    )
  }
}

export default IngredientSearch
