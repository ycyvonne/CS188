import React, { Component } from 'react'
import { navigate } from '@reach/router'

import Page from '../../components/Page'
import Header from '../../components/Header'
import Card from '../../components/Card'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

class IngredientSearchResults extends Component {
  state = {
    fetched: false,
    results: [],
  }

  async componentDidMount() {
    const res = await fetch(
      `https://food-api-proxy.herokuapp.com/ingredient-search?q=${
        this.props.ingredient
      }`
    )
    const data = await res.json()
    this.setState({
      fetched: true,
      results: data,
    })
  }

  selectResult = ingredient => {
    this.props.addIngredient(ingredient)
    navigate('/')
  }

  render() {
    return (
      <Page backButton={true}>
        <Header>Results similar to “{this.props.ingredient}”</Header>
        {!this.state.fetched && <Loading />}
        {this.state.fetched &&
          this.state.results.map((result, i) => (
            <Card
              text={result.name}
              image={result.image}
              key={i}
              onClick={() => this.selectResult(result)}
            />
          ))}
        {this.state.fetched && this.state.results.length === 0 && (
          <Error
            title="No Ingredients Found"
            message="We've searched based on the ingredient name you've typed. Try re-searching or checking for typos."
          />
        )}
      </Page>
    )
  }
}

export default IngredientSearchResults
