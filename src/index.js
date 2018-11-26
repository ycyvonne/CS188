import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { css } from 'react-emotion'

import 'normalize.css'
import './global/globalStyles'

import IngredientSearch from './pages/IngredientSearchResults'
import RecipeCustomize from './pages/RecipeCustomize'
import IngredientsPage from './pages/IngredientsPage'
import RecipeSearchResults from './pages/RecipeSearchResults'
import RecipePage from './pages/RecipePage'
import IngredientSearchResults from './pages/IngredientSearchResults'

const App = () => (
  <div
    className={css`
      display: flex;
      justify-content: center;
      background: black;
      height: 100vh;
    `}
  >
    <div
      className={css`
        width: 420px;
        background: white;
        height: 100%;
        > div {
          height: 100%;
        }
      `}
    >
      <Router>
        <IngredientsPage path="/" />
        <IngredientSearch path="ingredient-search" />
        <IngredientSearchResults path="ingredient-search-results" />
        <RecipeCustomize path="recipe-customize" />
        <RecipeSearchResults path="recipe-search-results" />
        <RecipePage path="recipe-page" />
      </Router>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
