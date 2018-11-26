import React, { Component } from 'react'
import { css } from 'react-emotion'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Page from '../../components/Page'
import ActionBar from '../../components/ActionBar'
import Button from '../../components/Button'
import margins from '../../global/margins'

class IngredientsPage extends Component {
  state = {
    selectMode: false,
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
              margin-bottom: ${margins.xsmall};
            `}
          >
            <Button light={true} type="select" />
          </div>
          {this.props.ingredients.map((ingredient, i) => (
            <Card key={i} image={ingredient.image} text={ingredient.name} />
          ))}
        </>
      )
    }
    return <Page bottomBar={<ActionBar />}>{ingredientsView}</Page>
  }
}

export default IngredientsPage
