import React, { Component } from 'react'
import { css } from 'react-emotion'
import Button from './components/Button'
import Input from './components/Input'

class App extends Component {
  render() {
    return (
      <div
        className={css`
          max-width: 500px;
        `}
      >
        <Button />
        <Input />
        <h1>hello world</h1>
      </div>
    )
  }
}

export default App
