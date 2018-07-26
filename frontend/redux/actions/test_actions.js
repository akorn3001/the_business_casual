import * as ArticleAPIUtil from '../util/articles_api_util';

export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";

export const receiveAllArticles = articles => ({
  type: RECEIVE_ALL_ARTICLES,
  articles
});

export const requestAllArticles = () => (dispatch) => {
  return ArticleAPIUtil.fetchAllArticles()
  .then(articles => {
    dispatch(receiveAllArticles(articles));
  });
};

// 1) RECEIVE_ALL_ARTICLES is the variable name for the string "RECEIVE_ALL_ARTICLES"
//    It is used merely for the type property of the receiveAllArticles action.
// 2) receiveAllArticles(articles) is an action with a payload of articles that
//    gets dispatched by the store to the appropriate reducer, altering the state.
// 3) requestAllArticles is an asynchronous function that can be used in our react
//    components to trigger a dispatch from the store to the appropriate reducer
//    to then alter our state in some way.
