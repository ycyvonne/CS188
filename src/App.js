import React, { Component } from 'react'
import { css } from 'react-emotion'

import IngredientsPage from './pages/ingredients-page'
import ActionBar from './components/ActionBar';
import './global/globalStyles'

class App extends Component {
  render() {
    return (
      <div className={css`
        display: flex;
        align-item: center;
        justify-content: center;
        background: black;
        min-height: 100vh;
      `}>
        <div className={css`
          width: 360px;
          background: white;
          padding: 10px;
          min-height: 100%;
          position: relative;
        `}>
          <IngredientsPage />
          <ActionBar />
        </div>
      </div>
    )
  }
}

export default App
