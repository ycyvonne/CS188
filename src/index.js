import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router } from '@reach/router'
import { css } from 'react-emotion'

import 'normalize.css'
import './global/globalStyles'

import IngredientSearch from './pages/IngredientSearch'
import RecipeCustomize from './pages/RecipeCustomize'
import IngredientsPage from './pages/IngredientsPage/container'
import RecipeSearchResults from './pages/RecipeSearchResults'
import RecipePage from './pages/RecipePage'
import IngredientSearchResults from './pages/IngredientSearchResults'

import ingredientsList from './reducers'

const store = createStore(ingredientsList)

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
        <IngredientSearchResults path="ingredient-search/:ingredient" />
        <RecipeCustomize path="recipe-customize" />
        <RecipeSearchResults path="recipe-search-results" />
        <RecipePage path="recipe-page" />
      </Router>
    </div>
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
