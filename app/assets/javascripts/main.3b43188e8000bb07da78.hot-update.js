webpackHotUpdate("main",{

/***/ "./frontend/components/Container/article_index_item_container.jsx":
/*!************************************************************************!*\
  !*** ./frontend/components/Container/article_index_item_container.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _article_actions = __webpack_require__(/*! ../../redux/actions/article_actions */ "./frontend/redux/actions/article_actions.js");

var _modal_actions = __webpack_require__(/*! ../../redux/actions/modal_actions */ "./frontend/redux/actions/modal_actions.js");

var _article_index_item = __webpack_require__(/*! ../Presentational/article_index_item */ "./frontend/components/Presentational/article_index_item.jsx");

var _article_index_item2 = _interopRequireDefault(_article_index_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.session.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    requestDeleteArticle: function requestDeleteArticle(article_id) {
      return dispatch((0, _article_actions.requestDeleteArticle)(article_id));
    },
    showDeleteArticleModal: function showDeleteArticleModal(article_id) {
      return dispatch((0, _modal_actions.showDeleteArticleModal)(article_id));
    }
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_article_index_item2.default));

/***/ })

})
//# sourceMappingURL=main.3b43188e8000bb07da78.hot-update.js.map