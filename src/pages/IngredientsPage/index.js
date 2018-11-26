import React, { Component } from 'react'
import { css } from 'react-emotion'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Page from '../../components/Page'
import Button from '../../components/Button'
import margins from '../../global/margins'

class IngredientsPage extends Component {
  state = {
    selectMode: false,
    selectedButtons: Array.apply(
      null,
      Array(this.props.ingredients.length)
    ).map(() => false),
  }

  toggleButtonSelect = i => {
    const { selectedButtons } = this.state
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
    let ingredientsView
    if (this.props.ingredients.length === 0) {
      ingredientsView = <Header>You have no ingredients.</Header>
    } else {
      ingredientsView = (
        <>
          <div
            className={css`
              width: 100%;
              display: flex;
              flex-direction: row-reverse;
              height: 40px;
              margin-bottom: ${margins.xsmall};
            `}
          >
            {!this.state.selectMode && (
              <Button
                light={true}
                type="select"
                onClick={() => this.setState({ selectMode: true })}
              />
            )}
          </div>

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
          to="/ingredient-search"
        />
        <Button
          className={css`
            justify-self: right;
          `}
          type="cook"
          to="/"
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
