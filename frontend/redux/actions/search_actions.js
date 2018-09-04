import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCHED_RESULTS = "RECEIVE_SEARCHED_RESULTS";

export const receiveSearchedResults = (results) => {
  return {
    type: RECEIVE_SEARCHED_RESULTS,
    results
  };
};

export const requestSearchedResults = (search) => dispatch => {
  return SearchAPIUtil.fetchSearchedResults(search)
  .then(results => {
    dispatch(receiveSearchedResults(results));
  });
};
