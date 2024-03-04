export default function recipeReducer(state = [{id:1, title:'hohoh'}], action) {
    console.log('Action.type:', action.type); // Log the action
    switch (action.type) {
        case 'CREATE_RECIPE':
            const newState = [...state, { ...action.recipe }];
            console.log('New state:', newState); // Log the new state
            return newState;
        default:
            return state;
    }
}
