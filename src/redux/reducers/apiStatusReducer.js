import {
  BEGIN_API_CALL,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAIL,
  CREATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_SUCCESS,
  FETCH_AUTHORS_SUCCESS,
  API_CALL_ERROR,
} from '../actions/actionTypes';
import initialState from './initialState';

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  switch (action.type) {
    case BEGIN_API_CALL:
      return state + 1;
    case FETCH_RECIPES_SUCCESS:
    case CREATE_RECIPE_SUCCESS:
    case FETCH_AUTHORS_SUCCESS:
    case API_CALL_ERROR:
      return state - 1;
    default:
      return state;
  }
}
