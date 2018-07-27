import merge from 'lodash/merge';

import {
  RECEIVE_ALL_ARTICLES,
  RECEIVE_SINGLE_ARTICLE,
  REMOVE_SINGLE_ARTICLE,
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  RECEIVE_ERRORS
} from '../actions/article_actions';

const articlesReducer = (state = {}, action) => {
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
    case REMOVE_SINGLE_ARTICLE:
      article = action.article;
      newState = Object.assign({}, state);
      delete newState[article.id];
      return newState;
    case CREATE_ARTICLE:
      // asdasdasd
    case UPDATE_ARTICLE:
      // asdasdasd
    case RECEIVE_ERRORS:
      // asdasdasd
    default:
      return state;
  }
};

export default TestReducer;
