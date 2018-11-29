export const addIngredient = ingredient => ({
  type: 'ADD_INGREDIENT',
  ingredient,
})

export const removeIngredients = ingredients => {
  return ({
    type: 'REMOVE_INGREDIENTS',
    ingredientNames: ingredients
                        .filter(ingredient => !!ingredient)
                        .map(ingredient => ingredient.name),
  })  
}