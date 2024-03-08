import { getRecipes, saveRecipe } from '../../api/recipeApi';
import {
  FETCH_RECIPES_START,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAIL,
  CREATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_SUCCESS,
} from './actionTypes';
import { beginApiCall } from './apiStatusActions';

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
      });
  };
};
