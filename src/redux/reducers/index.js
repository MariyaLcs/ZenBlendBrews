import { combineReducers } from "redux";
import recipeReducer from './recipeReducer';
import authorReducer from './authorReducer'

const rootReducer = combineReducers({
    recipes: recipeReducer, authors: authorReducer
});



export default rootReducer
