import merge from 'lodash/merge';

import { RECEIVE_ALL_ARTICLES } from '../actions/test_actions';

const TestReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ARTICLES:
      newState = Object.assign({}, state, action.articles);
      return newState;
    default:
      return state;
  }
};

export default TestReducer;
