import React, { Component } from 'react'
import { css } from 'react-emotion'
import { navigate } from '@reach/router'

import Page from '../../components/Page'
import Header from '../../components/Header'
import Card from '../../components/Card'

import Loading from '../../components/Loading'

class RecipeSearchResults extends Component {
  state = {
    fetched: false,
    results: [],
  }

  async componentDidMount() {
    const res = await fetch(
      `https://food-api-proxy.herokuapp.com/recipe-search-by-ingredients?q=${this.props.ingredients
        .map(i => i.name)
        .join(',')}`
    )
    const data = await res.json()
    this.setState({
      fetched: true,
      results: data,
    })
  }

  selectResult = recipeID => {
    navigate(`/recipe/${recipeID}`)
  }

  render() {
    
    return (
      <Page backButton={true}>
        <Header>Results based off your ingredients</Header>
        {!this.state.fetched && <Loading />}
        {this.state.fetched && this.state.results.map((result, i) => (
          <Card
            text={result.title}
            image={result.image}
            key={i}
            onClick={() => this.selectResult(result.id)}
          />
        ))}
      </Page>
    )
  }
}

export default RecipeSearchResults