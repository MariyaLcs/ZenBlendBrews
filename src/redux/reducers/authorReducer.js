import  { FETCH_AUTHORS_SUCCESS }  from '../../actionTypes';
import initialState from './initialState'

export default function authorReducer(state = initialState.authors, action) {
    console.log('Action.type:', action.type); 
    switch (action.type) {
        case FETCH_AUTHORS_SUCCESS:
            return [...action.payload];
      
        default:
            return state;
    }
}
