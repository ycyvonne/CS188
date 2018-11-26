const ingredientsList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      if (state.includes(action.ingredient)) {
        return state
      }
      return [...state, action.ingredient]
    case 'REMOVE_INGREDIENTS':
      return state.filter(
        ingredient => !action.ingredientNames.includes(ingredient.name)
      )
    default:
      return state
  }
}

export default ingredientsList
