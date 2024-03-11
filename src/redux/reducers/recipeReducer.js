import initialState from './initialState';

export default function recipeReducer(state = initialState.recipes, action) {
  console.log('Action.type:', action.type);
  switch (action.type) {
    case 'FETCH_RECIPES_SUCCESS':
      return [...action.payload].sort((a, b) => b.id - a.id);

    case 'CREATE_RECIPE_SUCCESS':
      return [{ ...action.payload }, ...state];

    case 'UPDATE_RECIPE_SUCCESS':
      return state.map((recipe) =>
        recipe.id === action.payload.id ? action.payload : recipe
      );
    case 'DELETE_RECIPE_OPTIMISTIC':
      return state.filter((recipe) => recipe.id !== action.payload);
    default:
      return state;
  }
}
