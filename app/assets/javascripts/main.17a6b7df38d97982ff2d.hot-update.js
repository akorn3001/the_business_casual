webpackHotUpdate("main",{

/***/ "./frontend/redux/util/route_util.js":
/*!*******************************************!*\
  !*** ./frontend/redux/util/route_util.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminRoute = exports.AuthRoute = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// renders component if logged out, otherwise redirects to the root url

var Auth = function Auth(_ref) {
  var Component = _ref.component,
      path = _ref.path,
      loggedIn = _ref.loggedIn,
      currentUser = _ref.currentUser;
  return _react2.default.createElement(_reactRouterDom.Route, { path: path, render: function render(props) {
      if (!loggedIn) {
        return _react2.default.createElement(Component, props);
      } else if (currentUser.city_id) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/cities/' + currentUser.city_id });
      } else {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/cities' });
      }
    } });
};

// renders component if logged in AND admin user

var Admin = function Admin(_ref2) {
  var Component = _ref2.component,
      path = _ref2.path,
      loggedIn = _ref2.loggedIn,
      currentUser = _ref2.currentUser;

  return _react2.default.createElement(_reactRouterDom.Route, { path: path, render: function render(props) {
      if (loggedIn && currentUser.admin) {
        return _react2.default.createElement(Component, props);
      } else {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
      }
    } });
};

// renders component if logged in, otherwise redirects to the login page
// const Protected = ({ component: Component, path, loggedIn }) => (
//   <Route path={path} render={(props) => (
//      loggedIn ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to="/login"/>
//     )
//   )}/>
// );

// access the Redux state to check if the user is logged in
var mapStateToProps = function mapStateToProps(state) {
  return { loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser };
};

// connect Auth to the redux state
var AuthRoute = exports.AuthRoute = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, null)(Auth));

// connect Admin to the redux state
var AdminRoute = exports.AdminRoute = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, null)(Admin));

// connect Protected to the redux state
// export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

/***/ })

})
//# sourceMappingURL=main.17a6b7df38d97982ff2d.hot-update.js.map