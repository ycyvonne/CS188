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
          selections={this.state.selectedIngredients}
          addIngredient={this.addIngredientToTemp}
          removeIngredient={this.removeIngredientFromTemp}
        />
        {
          this.state.selectedIngredients.length != 0 &&
          <TempSelectionBox 
            selections={this.state.selectedIngredients}
            removeIngredient={this.removeIngredientFromTemp}
            addToList={this.addIngredientsToStore}/>
        }
        {
          this.state.selectedIngredients.length == 0 && this.state.searchText == '' &&
          <Header style={css`
            text-align: center;
            position: absolute;
            top: 40%;
            transform: translateY(-50%);
            width: 80%;
          `}>Start typing names of ingredients to add to your list.</Header>
        }
      </Page>
    )
  }
}

export default IngredientSearch
