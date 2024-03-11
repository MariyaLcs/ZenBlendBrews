import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.REACT_APP_API_URL + '/recipes/';

export function getRecipes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveRecipe(recipe) {
  return fetch(baseUrl + (recipe.id || ''), {
    method: recipe.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(recipe),
  })
    .then(handleResponse)
    .catch((error) => {
      handleError(error);
      return Promise.reject(error);
    });
}

export function deleteRecipe(recipeId) {
  return fetch(baseUrl + recipeId, { method: 'DELETE' })
    .then(handleResponse)
    .catch((error) => Promise.reject(error));
}
