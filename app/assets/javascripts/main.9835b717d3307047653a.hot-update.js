webpackHotUpdate("main",{

/***/ "./frontend/redux/reducers/articles_reducer.js":
/*!*****************************************************!*\
  !*** ./frontend/redux/reducers/articles_reducer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _article_actions = __webpack_require__(/*! ../actions/article_actions */ "./frontend/redux/actions/article_actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var articlesReducer = function articlesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  var newState = void 0;
  var article = void 0;

  Object.freeze(state);
  switch (action.type) {
    case CLEAR_ARTICLE_STATE:
      newState = {};
      return newState;
    case _article_actions.RECEIVE_ALL_ARTICLES:
      newState = Object.assign({}, state, action.articles);
      return newState;
    case _article_actions.RECEIVE_SINGLE_ARTICLE:
      article = action.article;
      // return merge({}, state, { [article.id]: article });
      newState = Object.assign({}, state, _defineProperty({}, article.id, article));
      return newState;
    case _article_actions.DELETE_SINGLE_ARTICLE:
      article = action.article;
      newState = Object.assign({}, state);
      delete newState[action.articleID];
      return newState;
    default:
      return state;
  }
};

exports.default = articlesReducer;

/***/ })

})
//# sourceMappingURL=main.9835b717d3307047653a.hot-update.js.map