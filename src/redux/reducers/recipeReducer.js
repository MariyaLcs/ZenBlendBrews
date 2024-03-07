import initialState from './initialState'

export default function recipeReducer(state = initialState.recipes, action) {
    console.log('Action.type:', action.type); 
    switch (action.type) {
        case 'FETCH_RECIPES_SUCCESS':
            return [...action.payload];
        // case 'CREATE_RECIPE':
        //     const newState = [...state, { ...action.recipe }];
        //     console.log('New state:', newState); 
        //     return newState;
        case 'CREATE_RECIPE_SUCCESS':
            return [...state, { ...action.payload }];
              
        case 'UPDATE_RECIPE_SUCCESS':
            return state.map(recipe =>
                recipe.id === action.payload.id ? action.payload : recipe
            );
        
        default:
            return state;
    }
}
