import merge from 'lodash/merge';

import { RECEIVE_ALL_ARTICLES, RECEIVE_SINGLE_ARTICLE } from '../actions/test_actions';

const TestReducer = (state = {}, action) => {
  let newState;
  let article;

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ARTICLES:
      newState = Object.assign({}, state, action.articles);
      return newState;
    case RECEIVE_SINGLE_ARTICLE:
      article = action.article;
      return merge({}, state, { [article.id]: article });
    default:
      return state;
  }
};

export default TestReducer;
