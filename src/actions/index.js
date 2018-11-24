export const addIngredient = ingredient => ({
  type: 'ADD_INGREDIENT',
  ingredient,
  // id: ingredient.id,
  // name: ingredient.name,
  // image: ingredient.image,
  // quantity: ingredient.quantity,
})

export const removeIngredient = ingredient => ({
  type: 'REMOVE_INGREDIENT',
  id: ingredient.id,
})
