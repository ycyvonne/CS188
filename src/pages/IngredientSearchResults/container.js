import { connect } from 'react-redux'

import { addIngredient } from '../../actions'
import IngredientSearchResults from '.'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // addIngredient: ingredient => dispatch(addIngredient(ingredient)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientSearchResults)
