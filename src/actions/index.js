export const addIngredient = ingredient => ({
  type: 'ADD_INGREDIENT',
  ingredient,
})

export const removeIngredients = ingredients => ({
  type: 'REMOVE_INGREDIENTS',
  ingredientNames: ingredients.map(ingredient => ingredient.name),
})
