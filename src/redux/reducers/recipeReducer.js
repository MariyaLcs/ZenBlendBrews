export default function recipeReducer(state = [{id:1, title:'hohoh'}], action) {
    console.log('Action.type:', action.type); 
    switch (action.type) {
        case 'FETCH_RECIPES_SUCCESS':
            return [...action.payload];
        case 'CREATE_RECIPE':
            const newState = [...state, { ...action.recipe }];
            console.log('New state:', newState); 
            return newState;
        
        default:
            return state;
    }
}
