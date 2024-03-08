import { getAuthors } from '../../api/authorApi';
import {
  FETCH_AUTHORS_SUCCESS,
  FETCH_AUTHORS_START,
  FETCH_AUTHORS_FAIL,
} from './actionTypes';
import { beginApiCall } from './apiStatusActions';

export const fetchAuthors = () => {
  return function (dispatch) {
    dispatch({ type: FETCH_AUTHORS_START });
    dispatch(beginApiCall());
    return getAuthors()
      .then((authors) => {
        dispatch({ type: FETCH_AUTHORS_SUCCESS, payload: authors });
      })
      .catch((error) => {
        const errorMessage = error.toString();
        dispatch({ type: FETCH_AUTHORS_FAIL, error: errorMessage });
      });
  };
};
