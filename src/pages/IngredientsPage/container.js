import { connect } from 'react-redux'

import { removeIngredients } from '../../actions'
import IngredientsPage from '.'

const mapStateToProps = state => ({
  ingredients: state,
})

const mapDispatchToProps = dispatch => ({
  removeIngredients: ingredients => dispatch(removeIngredients(ingredients)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsPage)
