import {
  BEGIN_API_CALL,
  API_CALL_ERROR,
  API_CALL_SUCCESS,
} from '../actions/actionTypes';
import initialState from './initialState';

export default function apiCallsStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  switch (action.type) {
    case BEGIN_API_CALL:
      return state + 1;
    case API_CALL_ERROR:
    case API_CALL_SUCCESS:
      return state - 1;
    default:
      return state;
  }
}
