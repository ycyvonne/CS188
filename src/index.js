import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import 'normalize.css'
import './global/globalStyles'

import RecipeSearch from './pages/RecipeSearch'
import RecipeCustomize from './pages/RecipeCustomize'
import IngredientsPage from './pages/IngredientsPage'
import IngredientAdd from './pages/IngredientAdd'

const App = () => (
  <div>
    <Router>
      <IngredientsPage path="/" />
      <RecipeSearch path="search" />
      <RecipeCustomize path="recipe-customize" />
      <IngredientAdd path="ingredient-add" />
    </Router>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
