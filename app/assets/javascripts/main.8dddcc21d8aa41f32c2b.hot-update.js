webpackHotUpdate("main",{

/***/ "./frontend/components/Container/admin_dashboard_container.jsx":
/*!*********************************************************************!*\
  !*** ./frontend/components/Container/admin_dashboard_container.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _selectors = __webpack_require__(/*! ../../redux/reducers/selectors */ "./frontend/redux/reducers/selectors.js");

var _admin_dashboard = __webpack_require__(/*! ../Presentational/admin_dashboard */ "./frontend/components/Presentational/admin_dashboard.jsx");

var _admin_dashboard2 = _interopRequireDefault(_admin_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.session.currentUser,
    unpublishedArticles: (0, _selectors.selectAllArticles)(state).filter(function (article) {
      return !article.published;
    }),
    publishedArticles: (0, _selectors.selectAllArticles)(state).filter(function (article) {
      return article.published;
    })
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     requestAllArticles: () => dispatch(requestAllArticles()),
//
//   };
// };

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_admin_dashboard2.default);

/***/ })

})
//# sourceMappingURL=main.8dddcc21d8aa41f32c2b.hot-update.js.map