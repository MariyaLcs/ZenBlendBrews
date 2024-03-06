import { getRecipes } from '../../api/recipeApi';
import  { FETCH_RECIPES_START, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAIL }  from '../../actionTypes';


export function createRecipe(recipe){
    return {type: 'CREATE_RECIPE', recipe}
}

export const fetchRecipes = () => {
    return function(dispatch) {
        dispatch({ type: FETCH_RECIPES_START });
    

        return getRecipes()
          .then(recipes => {
            dispatch({ type: FETCH_RECIPES_SUCCESS, payload: recipes });
          })
          .catch(error => {
            const errorMessage = error.toString();
        dispatch({ type: FETCH_RECIPES_FAIL, error: errorMessage });
          });
      };
  };
