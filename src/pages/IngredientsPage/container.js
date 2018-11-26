import { connect } from 'react-redux'

import IngredientsPage from '.'

const mapStateToProps = state => ({
  ingredients: state,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsPage)
