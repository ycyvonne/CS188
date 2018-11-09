import React, { Component } from 'react'
import { css } from 'react-emotion'

import Page from '../components/Page'
import Header from '../components/Header'
import Counter from '../components/Counter'
import TagSelector from '../components/TagSelector'
import FullWidthButton from '../components/FullWidthButton'

class IngredientAdd extends Component {
  render() {
    return (
      <Page
        backButton={true}
        bottomBar={<FullWidthButton title="Add Ingredient" />}
      >
        <Header>
          How much{' '}
          <span
            className={css`
              color: #fb3640;
            `}
          >
            “Chicken Thigh”
          </span>
          are you adding?
        </Header>
        <Counter />
      </Page>
    )
  }
}

export default IngredientAdd
