import { connect } from 'react-redux'

import { removeIngredient } from '../../actions'
import IngredientsPage from '.'

const mapStateToProps = state => ({
  // ingredients: state,
  ingredients: [
    {
      name: 'apple',
      image: 'https://spoonacular.com/cdn/ingredients_250x250/apple.jpg',
    },
  ],
})

const mapDispatchToProps = dispatch => ({
  removeIngredient: ingredient => dispatch(removeIngredient(ingredient)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsPage)
