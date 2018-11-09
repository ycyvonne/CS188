import React, { Component } from 'react'

import Header from '../components/Header'
import Card from '../components/Card'
import Page from '../components/Page'
import ActionBar from '../components/ActionBar';

class IngredientsPage extends Component {
  state = {
    ingredients: [],
    // ingredients: [
    //   {
    //     quantity: '1 ct.',
    //     image:
    //       'https://5.imimg.com/data5/IK/WX/MY-5776850/chicken-breast-boneless-500x500.jpg',
    //     text: 'Chicken Breast',
    //   },
    // ],
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
      {ingredientsView}
      <ActionBar/>
      </Page>
  }
}

export default IngredientsPage
