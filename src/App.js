import React, { Component } from 'react'
import { css } from 'react-emotion'

import IngredientsPage from './pages/IngredientsPage'
import ActionBar from './components/ActionBar'
import RecipeSearch from './pages/RecipeSearch'

class App extends Component {
  state = {
    currentPage: '',
  }

  render() {
    let page
    if (this.state.currentPage === 'recipe-search') {
      page = <RecipeSearch />
    } else {
      page = (
        <>
          <IngredientsPage />
          <ActionBar />
        </>
      )
    }

    return (
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
          {page}
        </div>
      </div>
    )
  }
}

export default App
