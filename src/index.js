import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router } from '@reach/router'
import { css } from 'react-emotion'

import 'normalize.css'
import './global/globalStyles'

import IngredientsPage from './pages/IngredientsPage/container'
import IngredientSearch from './pages/IngredientSearch'
import IngredientSearchResults from './pages/IngredientSearchResults/container'
import RecipeCustomize from './pages/RecipeCustomize'
import RecipeSearchResults from './pages/RecipeSearchResults/container'
import RecipePage from './pages/RecipePage'

import ingredientsList from './reducers'

const store = createStore(
  ingredientsList,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
        {/* <RecipeCustomize path="recipe-customize" /> */}
        <RecipeSearchResults path="recipe-search-results" />
        <RecipePage path="recipe/:recipeID" />
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
