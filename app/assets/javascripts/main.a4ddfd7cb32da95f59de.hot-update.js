webpackHotUpdate("main",{

/***/ "./frontend/components/Container/article_edit_container.jsx":
/*!******************************************************************!*\
  !*** ./frontend/components/Container/article_edit_container.jsx ***!
  \******************************************************************/
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

var _article_edit = __webpack_require__(/*! ../Presentational/article_edit */ "./frontend/components/Presentational/article_edit.jsx");

var _article_edit2 = _interopRequireDefault(_article_edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    article: state.entities.articles[ownProps.match.params.articleID]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    requestUpdateArticle: function requestUpdateArticle(article, article_id) {
      return dispatch((0, _article_actions.requestUpdateArticle)(article, article_id));
    },
    requestSingleArticle: function requestSingleArticle(article_id) {
      return dispatch((0, _article_actions.requestSingleArticle)(article_id));
    }
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_article_edit2.default));

/***/ })

})
//# sourceMappingURL=main.a4ddfd7cb32da95f59de.hot-update.js.map