import React, { Component } from 'react'
import { css } from 'react-emotion'

import Page from '../../components/Page'
import Header from '../../components/Header'
import Card from '../../components/Card'

class IngredientSearchResults extends Component {
  state = {
    results: [],
  }

  async componentDidMount() {
    const res = await fetch(
      `https://food-api-proxy.herokuapp.com/ingredient-search?q=${
        this.props.ingredient
      }`
    )
    const data = await res.json()
    this.setState({ results: data })
  }

  render() {
    return (
      <Page backButton={true}>
        <Header>Results similar to “{this.props.ingredient}”</Header>
        {this.state.results.map((result, i) => (
          <Card
            text={result.name}
            image={`https://spoonacular.com/cdn/ingredients_100x100/${
              result.image
            }`}
            key={i}
          />
        ))}
      </Page>
    )
  }
}

export default IngredientSearchResults
