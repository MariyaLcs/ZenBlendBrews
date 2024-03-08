import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import authorReducer from './authorReducer';
import apiCallsStatusReducer from './apiStatusReducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  authors: authorReducer,
  apiCallsInProgress: apiCallsStatusReducer,
});

export default rootReducer;
