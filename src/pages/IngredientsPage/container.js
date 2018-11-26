import { connect } from 'react-redux'

import { removeIngredient } from '../../actions'
import IngredientsPage from '.'

const mapStateToProps = state => ({
  ingredients: state,
})

const mapDispatchToProps = dispatch => ({
  removeIngredient: ingredient => dispatch(removeIngredient(ingredient)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsPage)
