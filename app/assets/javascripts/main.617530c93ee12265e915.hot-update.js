webpackHotUpdate("main",{

/***/ "./frontend/components/entry.jsx":
/*!***************************************!*\
  !*** ./frontend/components/entry.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _root = __webpack_require__(/*! ./root */ "./frontend/components/root.jsx");

var _root2 = _interopRequireDefault(_root);

var _store = __webpack_require__(/*! ../redux/store/store */ "./frontend/redux/store/store.js");

var _store2 = _interopRequireDefault(_store);

var _session_actions = __webpack_require__(/*! ../redux/actions/session_actions */ "./frontend/redux/actions/session_actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var store = void 0;
  if (window.currentUser) {
    var preloadedState = { session: { currentUser: window.currentUser } };
    store = (0, _store2.default)(preloadedState);
    delete window.currentUser;
  } else {
    store = (0, _store2.default)();
  }
  store = (0, _store2.default)();
  window.store = store;
  window.logout = _session_actions.logout;
  window.login = _session_actions.login;
  window.signUp = _session_actions.signUp;

  var root = document.getElementById('root');
  _reactDom2.default.render(_react2.default.createElement(_root2.default, { store: store }), root);
  module.hot.accept();
});

//Components
//React

/***/ })

})
//# sourceMappingURL=main.617530c93ee12265e915.hot-update.js.map