import React, { Component } from 'react'
import { navigate } from '@reach/router'

import Page from '../components/Page'
import Header from '../components/Header'
import FullWidthButton from '../components/FullWidthButton'
import Autocomplete from '../components/Autocomplete'

class IngredientSearch extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      searchText: '',
    }
  }

  inputTextChange = userInput => {
    this.setState({ searchText: userInput })
  }

  onEnter(text) {
    navigate(`/user/ingredient-search/${text}`);
  }

  render() {
    return (
      <Page backButton={true} to="/user/ingredients">
        <Header>What ingredients do you have?</Header>
        <Autocomplete
          suggestions={this.props.allIngredients}
          maxSuggestions={10}
          autoFocus={true}
          placeholder="Ex. Vegetables, Chicken, Dairy, etc."
          value={this.state.searchText}
          onChange={this.inputTextChange}
          onEnter={this.onEnter}
        />
        <FullWidthButton label="Search" to={this.state.searchText} />
      </Page>
    )
  }
}

export default IngredientSearch
