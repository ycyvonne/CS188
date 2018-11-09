import React, { Component } from 'react'
import { css } from 'react-emotion'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import './global/globalStyles'

class App extends Component {
  render() {
    return (
      <div
        className={css`
          max-width: 500px;
        `}
      >
        <Button light={true}>+</Button>
        <Input />
        <Card
          image="https://5.imimg.com/data5/IK/WX/MY-5776850/chicken-breast-boneless-500x500.jpg"
          text="Chicken Breast"/>
        <Card
          image="https://5.imimg.com/data5/IK/WX/MY-5776850/chicken-breast-boneless-500x500.jpg"
          text="Chicken Breast"/>
        <h1>hello world</h1>
      </div>
    )
  }
}

export default App
