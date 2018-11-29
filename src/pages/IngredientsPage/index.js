import React, { Component } from 'react'
import { css } from 'react-emotion'
import { Redirect, navigate } from '@reach/router'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Page from '../../components/Page'
import Button from '../../components/Button'

class IngredientsPage extends Component {
  constructor(props) {
    super(props)
    this.props = props
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

  handleClick = () => {
    sessionStorage.removeItem('user')
    navigate('/')
  }

  render() {
    let ingredientsView
    if (this.props.ingredients.length === 0) {
      ingredientsView = <Header>You have no ingredients.</Header>
    } else {
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
    const logoutButton = (
      <Button
        className={css`
          justify-self: right;
        `}
        type="logout"
        onClick={this.handleClick}
      />
    )
    const buttons = this.state.selectMode ? (
      <>
        <Button
          className={css`
            justify-self: left;
          `}
          light={true}
          type="x"
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
        topBar={
          <div
            className={css`
              display: grid;
              grid-template-columns: 1fr;
              width: 100%;
              margin: 10px;
            `}
          >
            {logoutButton}
          </div>
        }
        bottomBar={
          <div
            className={css`
              display: grid;
              grid-template-columns: 1fr 1fr;
              width: 100%;
            `}
          >
            {buttons}
          </div>
        }
      >
        {ingredientsView}
      </Page>
    )
  }
}

export default IngredientsPage
