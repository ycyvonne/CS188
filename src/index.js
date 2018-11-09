import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import 'normalize.css'
import './global/globalStyles'

import RecipeSearch from './pages/RecipeSearch'
import IngredientsPage from './pages/IngredientsPage'

const App = () => (
  <div>
    <Router>
      <IngredientsPage path="/" />
      <RecipeSearch path="search" />
    </Router>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
