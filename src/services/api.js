export function getRecentRecipes(app){
  const recipes = app.service('recipes');
  // return recipes.get({}).then((data, err)=>data.data);
  
  return recipes.find({
    query:{
      '$sort': {'createdAt': -1}
    }
  }).then((data, err)=>{
    // console.log('comming from API: ',data.data)
    return data.data;
  });
  
}

export function createRecipe(app, name, ingredients){
  const recipes = app.services('recipes');
  return  recipes.create({
    name, ingredients
  }).then((data, err)=>data);
}