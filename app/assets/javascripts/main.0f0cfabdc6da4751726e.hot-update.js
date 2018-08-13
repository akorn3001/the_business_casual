webpackHotUpdate("main",{

/***/ "./frontend/components/Container/categorized_article_index_container.jsx":
/*!*******************************************************************************!*\
  !*** ./frontend/components/Container/categorized_article_index_container.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _article_actions = __webpack_require__(/*! ../../redux/actions/article_actions */ "./frontend/redux/actions/article_actions.js");

var _selectors = __webpack_require__(/*! ../../redux/reducers/selectors */ "./frontend/redux/reducers/selectors.js");

var _categorized_article_index = __webpack_require__(/*! ../Presentational/categorized_article_index */ "./frontend/components/Presentational/categorized_article_index.jsx");

var _categorized_article_index2 = _interopRequireDefault(_categorized_article_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var categorizedArticles = void 0;

  if (ownProps.published) {
    categorizedArticles = (0, _selectors.selectAllArticles)(state).filter(function (article) {
      return article.published;
    }).reverse();
  } else {
    categorizedArticles = (0, _selectors.selectAllArticles)(state).filter(function (article) {
      return !article.published;
    });
  }

  return {
    categorizedArticles: categorizedArticles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    requestAllCategorizedArticles: function requestAllCategorizedArticles(category_id) {
      return dispatch((0, _article_actions.requestAllCategorizedArticles)(category_id));
    },
    clearArticleState: function clearArticleState() {
      return dispatch((0, _article_actions.clearArticleState)());
    }
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_categorized_article_index2.default));

/***/ })

})
//# sourceMappingURL=main.0f0cfabdc6da4751726e.hot-update.js.map