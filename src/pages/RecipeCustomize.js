import React, { Component } from 'react'

import Page from '../components/Page'
import Header from '../components/Header'
import Counter from '../components/Counter'
import TagSelector from '../components/TagSelector'
import FullWidthButton from '../components/FullWidthButton'

class RecipeCustomize extends Component {
  render() {
    return (
      <Page backButton={true} bottomBar={<FullWidthButton title="Search" />}>
        <Header>Customize your recipe</Header>
        <Counter label="Servings" />
        <Counter label="Max. missing ingredients" />
        <TagSelector label="Dietary Restrictions" />
      </Page>
    )
  }
}

export default RecipeCustomize
