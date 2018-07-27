import * as ArticleAPIUtil from '../util/article_api_util';

export const RECEIVE_ALL_ARTICLES = 'RECEIVE_ALL_ARTICLES';
export const RECEIVE_SINGLE_ARTICLE = 'RECEIVE_SINGLE_ARTICE';
export const REMOVE_SINGLE_ARTICLE = 'REMOVE_SINGLE_ARTICLE';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// Actions dispatched by the store to the reducer
export const receiveAllArticles = (articles) => ({
  type: RECEIVE_ALL_ARTICLES,
  articles
});

export const receiveSingleArticle = (article) => ({
  type: RECEIVE_SINGLE_ARTICLE,
  article
});

export const removeSingleArticle = (article) => ({
  type: REMOVE_SINGLE_ARTICLE,
  article,
});

export const updateArticle = (article) => ({
  type: UPDATE_ARTICLE,
  article
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

// Asynchronous functions to be called in our React components
export const requestAllArticles = () => (dispatch) => {
  return ArticleAPIUtil.fetchAllArticles()
  .then(articles => {
    dispatch(receiveAllArticles(articles));
  });
};

export const requestSingleArticle = (article_id) => (dispatch) => {
  return ArticleAPIUtil.fetchSingleArticle(article_id)
  .then(article => {
    dispatch(receiveSingleArticle(article));
  });
};

export const requestAllCategorizedArticles = (categoy_id) => {
  return ArticleAPIUtil.fetchCategorizedArticles(category_id)
  .then(categorizedArticles => {
    dispatch(receiveAllArticles(categorizedArticles));
  });
};


export const requestUpdateArticle = (article) => (dispatch) => (
  ArticleAPIUtil.updateArticle(article)
  .then(updatedArticle => {
    dispatch(receiveSingleArticle(updatedArticle));
    return article;
  }).fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestCreateArticle = (article) => (dispatch) => (
  ArticleAPIUtil.createArticle(article)
  .then(createdArticle => {
    dispatch(receiveSingleArticle(article));
    return article;
  }).fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestRemoveArticle = (article) => (dispatch) => {
  return ArticleAPIUtil.destroyArticle(article)
  .then(() => dispatch(removeSingleArticle()));
};
