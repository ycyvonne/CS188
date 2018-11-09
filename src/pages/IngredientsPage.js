import React, { Component } from 'react'

import Header from '../components/Header'
import Card from '../components/Card'
import Page from '../components/Page'
import ActionBar from '../components/ActionBar';

class IngredientsPage extends Component {
  state = {
    // ingredients: [],
    ingredients: [
      {
        quantity: '1 ct.',
        image:
          'https://5.imimg.com/data5/IK/WX/MY-5776850/chicken-breast-boneless-500x500.jpg',
        text: 'Chicken Breast',
      },
    ],
  }

  render() {
    let ingredientsView
    if (this.state.ingredients.length === 0) {
      ingredientsView = <Header>You have no ingredients.</Header>
    } else {
      ingredientsView = this.state.ingredients.map((item, i) => (
        <Card
          key={'card-' + i}
          quantity={item.quantity}
          image={item.image}
          text={item.text}
        />
      ))
    }
    return <Page>
      <Header
        style="font-size: 20px">Meats</Header>
      <Card
          quantity='1 ct.'
          image='https://5.imimg.com/data5/IK/WX/MY-5776850/chicken-breast-boneless-500x500.jpg'
          text='Chicken Breast'/>
      <Header
        style="font-size: 20px">Fats</Header>
      <Card
          image='https://www.verywellfit.com/thmb/4jsSgnX13iAZuqxtD2NsT9TWuZQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/134469937-56a6b6f55f9b58b7d0e466b1.jpg'
          text='Canola Oil'/>
      </Page>
  }
}

export default IngredientsPage
