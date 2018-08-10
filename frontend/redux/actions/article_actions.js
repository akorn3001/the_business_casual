import * as ArticleAPIUtil from '../util/articles_api_util';

export const RECEIVE_ALL_ARTICLES = 'RECEIVE_ALL_ARTICLES';
export const RECEIVE_SINGLE_ARTICLE = 'RECEIVE_SINGLE_ARTICLE';
export const DELETE_SINGLE_ARTICLE = 'DELETE_SINGLE_ARTICLE';
// export const CREATE_ARTICLE = 'CREATE_ARTICLE';
// export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// Actions dispatched by the store to the reducer
export const receiveAllArticles = (articles) => {
  return {
    type: RECEIVE_ALL_ARTICLES,
    articles
  };
};

export const receiveSingleArticle = (article) => {
  return {
    type: RECEIVE_SINGLE_ARTICLE,
    article
  };
};

// export const createSingleArticle = (article) => {
//   return {
//     type: CREATE_ARTICLE,
//     article
//   };
// };

export const deleteSingleArticle = (article_id) => {
  return {
    type: DELETE_SINGLE_ARTICLE,
    articleID: article_id
  };
};

// export const updateArticle = (article) => {
//   return {
//     type: UPDATE_ARTICLE,
//     article
//   };
// };

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

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

export const requestUpdateArticle = (article, article_id) => (dispatch) => {
  return ArticleAPIUtil.updateArticle(article, article_id)
  .then(updatedArticle => {
    dispatch(receiveSingleArticle(updatedArticle));
    return updatedArticle;
  }).fail(err => dispatch(receiveErrors(err.responseJSON)));
};

export const requestCreateArticle = (article) => (dispatch) => (
  ArticleAPIUtil.createArticle(article)
  .then(createdArticle => {
    dispatch(receiveSingleArticle(createdArticle));
    return createdArticle;
  }).fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestDeleteArticle = (article_id) => (dispatch) => {
  return ArticleAPIUtil.destroyArticle(article_id).then(article => dispatch(deleteSingleArticle(article.id)));
};
