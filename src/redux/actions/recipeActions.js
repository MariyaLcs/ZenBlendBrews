import { getRecipes, saveRecipe, deleteRecipe } from '../../api/recipeApi';
import {
  FETCH_RECIPES_START,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAIL,
  CREATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_SUCCESS,
  DELETE_RECIPE_OPTIMISTIC,
} from './actionTypes';
import { beginApiCall, apiCallError } from './apiStatusActions';

export const fetchRecipes = () => {
  return function (dispatch) {
    dispatch({ type: FETCH_RECIPES_START });
    dispatch(beginApiCall());
    return getRecipes()
      .then((recipes) => {
        dispatch({ type: FETCH_RECIPES_SUCCESS, payload: recipes });
      })
      .catch((error) => {
        const errorMessage = error.toString();
        dispatch({ type: FETCH_RECIPES_FAIL, error: errorMessage });
        dispatch(apiCallError(error));
        return Promise.reject(error);
      });
  };
};
export const saveRecipeAction = (recipe) => {
  return function (dispatch, getState) {
    dispatch({ type: FETCH_RECIPES_START });
    dispatch(beginApiCall());
    return saveRecipe(recipe)
      .then((savedRecipe) => {
        recipe.id
          ? dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: savedRecipe })
          : dispatch({ type: CREATE_RECIPE_SUCCESS, payload: savedRecipe });
      })
      .catch((error) => {
        const errorMessage = error.toString();
        dispatch({ type: FETCH_RECIPES_FAIL, error: errorMessage });
        dispatch(apiCallError(error));
        return Promise.reject(error);
      });
  };
};

export const deleteRecipeAction = (recipeId) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_RECIPE_OPTIMISTIC,
      payload: recipeId,
    });
    return deleteRecipe(recipeId)
      .then(() => {})
      .catch((error) => {
        throw error;
      });
  };
};
