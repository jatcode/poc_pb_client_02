import { fork, call, put, takeEvery } from 'redux-saga/effects'
import {browserHistory} from 'react-router';
import { createRecipe, getRecentRecipes } from '../services/api';






function* addRecipe(feathersApp, action){
  const resp = yield call(createRecipe, feathersApp, action.name, action.description);
  // yield put({type:"ADD_RECIPE_SUCCEEDED",recipes}); we could do ERROR hanglind we SHOULD but not now :D
  console.log('inSAGA: ',resp);
  yield browserHistory.push('');
}
function* listenAddRecipeSaga(feathersApp){
  yield takeEvery("ADD_RECIPE_REQUESTED",addRecipe, feathersApp)
}


function* fetchRecentRecipes(feathersApp){
  const recipes = yield call(getRecentRecipes, feathersApp);
  yield put({type:"RECENT_RECIPES_SUCCEEDED",recipes});
}
function* recentRecipesSaga(feathersApp){
  yield takeEvery("RECENT_RECIPES_REQUESTED",fetchRecentRecipes, feathersApp)
}

export default function* root (feathersApp){
  yield [
    fork(recentRecipesSaga,feathersApp),
    fork(listenAddRecipeSaga,feathersApp)
  ]
}