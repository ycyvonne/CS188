import React, { Component } from 'react'
import { navigate } from '@reach/router'
import { css } from 'react-emotion'

import Page from '../components/Page'
import Header from '../components/Header'
import FullWidthButton from '../components/FullWidthButton'
import Autocomplete from '../components/Autocomplete'
import TempSelectionBox from '../components/TempSelectionBox'

import * as _ from 'lodash';

class IngredientSearch extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      searchText: '',
      selectedIngredients: []
    }
  }

  inputTextChange = userInput => {
    this.setState({ searchText: userInput })
  }

  onEnter(text) {
    navigate(`/user/ingredient-search/${text}`);
  }

  addIngredientToTemp = newIngredient => {
    this.setState({
      selectedIngredients: [newIngredient].concat(this.state.selectedIngredients)
    });
  }

  removeIngredientFromTemp = ingredientToRemove => {
    var ingredientList = this.state.selectedIngredients;
    this.setState({
      selectedIngredients: ingredientList.filter(ingredient => !_.some([ingredientToRemove], ingredient))
    });
  }

  addIngredientsToStore = () => {
    console.log('adding to list', this.state.selectedIngredients)
    this.props.addIngredients(this.state.selectedIngredients);
  }

  render() {
    return (
      <Page backButton={true} to="/user/ingredients" backStyles={css`
        position: absolute;
        z-index: 100;
        left: 16px;
        top: 24px;
        width: auto;
      `}>
        <Autocomplete
          maxSuggestions={10}
          autoFocus={true}
          placeholder="Ex. Vegetables, Chicken, Dairy, etc."
          value={this.state.searchText}
          onChange={this.inputTextChange}
          onEnter={this.onEnter}
          addIngredient={this.addIngredientToTemp}
          removeIngredient={this.removeIngredientToTemp}
        />
        <TempSelectionBox 
          selections={this.state.selectedIngredients}
          addToList={this.addIngredientsToStore}/>
      </Page>
    )
  }
}

export default IngredientSearch
