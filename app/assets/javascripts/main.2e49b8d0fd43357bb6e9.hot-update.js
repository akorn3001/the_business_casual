webpackHotUpdate("main",{

/***/ "./frontend/components/Container/admin_sidebar_container.jsx":
/*!*******************************************************************!*\
  !*** ./frontend/components/Container/admin_sidebar_container.jsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _admin_sidebar = __webpack_require__(/*! ../Presentational/admin_sidebar */ "./frontend/components/Presentational/admin_sidebar.jsx");

var _admin_sidebar2 = _interopRequireDefault(_admin_sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.session.currentUser
  };
};
//
// const mapDispatchToProps = dispatch => {
//   return {
//
//   };
// };

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, null)(_admin_sidebar2.default));

/***/ })

})
//# sourceMappingURL=main.2e49b8d0fd43357bb6e9.hot-update.js.map