import  { FETCH_AUTHORS_SUCCESS }  from '../../actionTypes';

export default function authorReducer(state = [], action) {
    console.log('Action.type:', action.type); 
    switch (action.type) {
        case FETCH_AUTHORS_SUCCESS:
            return [...action.payload];
      
        default:
            return state;
    }
}
