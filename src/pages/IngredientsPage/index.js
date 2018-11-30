import React, { Component } from 'react'
import { css } from 'react-emotion'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Page from '../../components/Page'
import Button from '../../components/Button'
import Loading from '../../components/Loading'

class IngredientsPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      selectMode: false,
      selectedButtons: Array.apply(
        null,
        Array(this.props.ingredients.length)
      ).map(() => false),
    }
  }

  toggleButtonSelect = i => {
    let selectedButtons = {}
    if (!this.state.selectMode) {
      this.setState({ selectMode: true })
      selectedButtons = Array.apply(null, Array(this.props.ingredients.length))
    } else {
      selectedButtons = this.state.selectedButtons
    }
    selectedButtons[i] = !selectedButtons[i]
    this.setState({ selectedButtons })
  }

  removeIngredients = () => {
    const selectedButtonsIndices = []
    this.state.selectedButtons.forEach((button, i) => {
      if (button === true) {
        selectedButtonsIndices.push(i)
      }
    })
    const ingredientsToDelete = []
    selectedButtonsIndices.forEach(i => {
      ingredientsToDelete.push(this.props.ingredients[i])
    })
    this.props.removeIngredients(ingredientsToDelete)
    this.setState({ selectMode: false })
  }

  render() {
    var ingredientsView;
    if (this.props.ingredients.length === 0) {
      var startingMessage = '';
      if (this.props.user) {
        var userFirstName = this.props.user.displayName.split(' ')[0];
        startingMessage = `Hi ${userFirstName}! `
      }
      
      ingredientsView = <Header>{startingMessage}Get started by adding what ingredients you have.</Header>
    }
    else {
      ingredientsView = (
        <>
          {this.props.ingredients.map((ingredient, i) => (
            <Card
              key={i}
              image={ingredient.image}
              text={ingredient.name}
              selectable={this.state.selectMode}
              selected={this.state.selectedButtons[i]}
              onClick={() => this.toggleButtonSelect(i)}
            />
          ))}
        </>
      )
    }

    const buttons = this.state.selectMode ? (
      <>
       <Button
          className={css`
            justify-self: left;
          `}
          light={true}
          type="<"
          onClick={() => this.setState({ selectMode: false })}
        />
        <Button
          type="trash"
          className={css`
            justify-self: right;
          `}
          onClick={this.removeIngredients}
        />
      </>
    ) : (
      <>
        <Button
          className={css`
            justify-self: left;
          `}
          type="plus"
          light={true}
          to="/user/ingredient-search"
        />
        <Button
          className={css`
            justify-self: right;
          `}
          type="cook"
          to="/user/recipe-search-results"
          disabled={this.props.ingredients.length === 0}
        />
      </>
    )

    return (
      <Page
        bottomBar={
          <div
            className={css`
              display: grid;
              grid-template-columns: 1fr 1fr;
              width: inherit;
              padding: 10px 20px;
            `}
          >
            {buttons}
          </div>
        }
      >
        {
          !this.props.synced && <Loading />
        }
        {
          this.props.synced && 
          <div className={css`
            width: inherit;
            height: 100%;
            padding: 0 16px 24px 16px;
          `}>
          {ingredientsView}
          </div>
        }
      </Page>
    )
  }
}

export default IngredientsPage
