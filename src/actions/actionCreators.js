export function recentRecipes(){
  return{
    type: 'RECENT_RECIPES_REQUESTED'
  }
}
export function addRecipe(name, description, ingredients, imageURL){
  return{
    type: 'ADD_RECIPE',
    name,
    description,
    ingredients,
    imageURL
  }
}