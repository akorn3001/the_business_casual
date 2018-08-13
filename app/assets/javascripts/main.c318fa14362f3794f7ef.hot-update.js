webpackHotUpdate("main",{

/***/ "./frontend/redux/actions/article_actions.js":
/*!***************************************************!*\
  !*** ./frontend/redux/actions/article_actions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestDeleteArticle = exports.requestCreateArticle = exports.requestUpdateArticle = exports.requestAllCategorizedArticles = exports.requestSingleArticle = exports.requestAllArticles = exports.receiveErrors = exports.deleteSingleArticle = exports.receiveSingleArticle = exports.receiveAllArticles = exports.clearArticleState = exports.RECEIVE_ERRORS = exports.CLEAR_ARTICLE_STATE = exports.DELETE_SINGLE_ARTICLE = exports.RECEIVE_SINGLE_ARTICLE = exports.RECEIVE_ALL_ARTICLES = undefined;

var _articles_api_util = __webpack_require__(/*! ../util/articles_api_util */ "./frontend/redux/util/articles_api_util.js");

var ArticleAPIUtil = _interopRequireWildcard(_articles_api_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_ALL_ARTICLES = exports.RECEIVE_ALL_ARTICLES = 'RECEIVE_ALL_ARTICLES';
var RECEIVE_SINGLE_ARTICLE = exports.RECEIVE_SINGLE_ARTICLE = 'RECEIVE_SINGLE_ARTICLE';
var DELETE_SINGLE_ARTICLE = exports.DELETE_SINGLE_ARTICLE = 'DELETE_SINGLE_ARTICLE';
var CLEAR_ARTICLE_STATE = exports.CLEAR_ARTICLE_STATE = 'CLEAR_ARTICLE_STATE';
// export const CREATE_ARTICLE = 'CREATE_ARTICLE';
// export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
var RECEIVE_ERRORS = exports.RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// Actions dispatched by the store to the reducer
var clearArticleState = exports.clearArticleState = function clearArticleState() {
  return {
    type: CLEAR_ARTICLE_STATE
  };
};

var receiveAllArticles = exports.receiveAllArticles = function receiveAllArticles(articles) {
  return {
    type: RECEIVE_ALL_ARTICLES,
    articles: articles
  };
};

var receiveSingleArticle = exports.receiveSingleArticle = function receiveSingleArticle(article) {
  return {
    type: RECEIVE_SINGLE_ARTICLE,
    article: article
  };
};

// export const createSingleArticle = (article) => {
//   return {
//     type: CREATE_ARTICLE,
//     article
//   };
// };

var deleteSingleArticle = exports.deleteSingleArticle = function deleteSingleArticle(article_id) {
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

var receiveErrors = exports.receiveErrors = function receiveErrors(errors) {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

// Asynchronous functions to be called in our React components
var requestAllArticles = exports.requestAllArticles = function requestAllArticles() {
  return function (dispatch) {
    return ArticleAPIUtil.fetchAllArticles().then(function (articles) {
      dispatch(receiveAllArticles(articles));
    });
  };
};

var requestSingleArticle = exports.requestSingleArticle = function requestSingleArticle(article_id) {
  return function (dispatch) {
    return ArticleAPIUtil.fetchSingleArticle(article_id).then(function (article) {
      dispatch(receiveSingleArticle(article));
    });
  };
};

var requestAllCategorizedArticles = exports.requestAllCategorizedArticles = function requestAllCategorizedArticles(category_id) {
  return function (dispatch) {
    return ArticleAPIUtil.fetchCategorizedArticles(category_id).then(function (categorizedArticles) {
      dispatch(receiveAllArticles(categorizedArticles));
    });
  };
};

var requestUpdateArticle = exports.requestUpdateArticle = function requestUpdateArticle(article, article_id) {
  return function (dispatch) {
    return ArticleAPIUtil.updateArticle(article, article_id).then(function (updatedArticle) {
      dispatch(receiveSingleArticle(updatedArticle));
      return updatedArticle;
    }).fail(function (err) {
      return dispatch(receiveErrors(err.responseJSON));
    });
  };
};

var requestCreateArticle = exports.requestCreateArticle = function requestCreateArticle(article) {
  return function (dispatch) {
    return ArticleAPIUtil.createArticle(article).then(function (createdArticle) {
      dispatch(receiveSingleArticle(createdArticle));
      return createdArticle;
    }).fail(function (err) {
      return dispatch(receiveErrors(err.responseJSON));
    });
  };
};

var requestDeleteArticle = exports.requestDeleteArticle = function requestDeleteArticle(article_id) {
  return function (dispatch) {
    return ArticleAPIUtil.destroyArticle(article_id).then(function (article) {
      return dispatch(deleteSingleArticle(article.id));
    });
  };
};

/***/ })

})
//# sourceMappingURL=main.c318fa14362f3794f7ef.hot-update.js.map