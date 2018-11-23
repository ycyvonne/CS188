import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { css } from 'react-emotion'

import 'normalize.css'
import './global/globalStyles'

import IngredientSearch from './pages/IngredientSearch'
import RecipeCustomize from './pages/RecipeCustomize'
import IngredientsPage from './pages/IngredientsPage'
import IngredientAdd from './pages/IngredientAdd'

const App = () => (
  <div
    className={css`
      display: flex;
      align-item: center;
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
        <IngredientAdd path="ingredient-add" />
        <RecipeCustomize path="recipe-customize" />
      </Router>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
