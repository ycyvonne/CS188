import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { css } from 'react-emotion'
import createHashHistory from 'history/createHashHistory';

import 'normalize.css'
import './global/globalStyles'

import RecipeSearch from './pages/RecipeSearch'
import IngredientsPage from './pages/IngredientsPage'

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

const App = () => (
  <div
    className={css`
      display: flex;
      align-item: center;
      justify-content: center;
      background: black;
      min-height: 100vh;
    `}
  >
    <div
      className={css`
        width: 360px;
        background: white;
        padding: 10px;
        min-height: 100%;
        position: relative;
      `}
    >
      <Router history={hashHistory}>
        <IngredientsPage path={process.env.PUBLIC_URL + "/"} />
        <RecipeSearch path={process.env.PUBLIC_URL + "/search"} />
      </Router>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
