const ingredientsList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      if (state.includes(action.ingredient)) {
        return state
      }
      return [...state, action.ingredient]
    case 'REMOVE_INGREDIENT':
      return state.filter(
        ingredient => ingredient.name !== action.ingredientName
      )
    default:
      return state
  }
}

export default ingredientsList
