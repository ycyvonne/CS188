import React, { Component } from 'react'
import { css } from 'react-emotion'
import Card from '../components/Card'

class IngredientsPage extends Component {
  state = {
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
      ingredientsView = (
        <div
          class={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
          `}
        >
          You have no ingredients.
        </div>
      )
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
    return (
      <div
        class={css`
          height: 100%;
        `}
      >
        {ingredientsView}
      </div>
    )
  }
}

export default IngredientsPage
