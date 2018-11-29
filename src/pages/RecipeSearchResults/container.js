import { connect } from 'react-redux'

import RecipeSearchResults from '.'

const mapStateToProps = state => ({
  // ingredients: state,
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeSearchResults)
