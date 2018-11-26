const ingredientsList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [...state, action.ingredient]
    case 'REMOVE_INGREDIENT':
      return state.filter(ingredient => ingredient.id !== action.id)
    default:
      return state
  }
}

export default ingredientsList
