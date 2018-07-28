import merge from 'lodash/merge';

import {
  RECEIVE_ALL_ARTICLES,
  RECEIVE_SINGLE_ARTICLE,
  DELETE_SINGLE_ARTICLE
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
      // return merge({}, state, { [article.id]: article });
      newState = Object.assign({}, state, {[article.id]: article});
      return newState;
    case DELETE_SINGLE_ARTICLE:
      article = action.article;
      newState = Object.assign({}, state);
      delete newState[action.articleID];
      return newState;
    default:
      return state;
  }
};

export default articlesReducer;
