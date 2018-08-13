webpackHotUpdate("main",{

/***/ "./frontend/redux/util/session_api_util.js":
/*!*************************************************!*\
  !*** ./frontend/redux/util/session_api_util.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var login = exports.login = function login(user) {
  return $.ajax({
    method: 'POST',
    url: '/users/sign_in',
    data: { user: user }
  });
};

var signUp = exports.signUp = function signUp(user) {
  return $.ajax({
    method: 'POST',
    url: '/users',
    data: { user: user }
  });
};

var logout = exports.logout = function logout() {
  return $.ajax({
    method: 'DELETE',
    url: '/users/sign_out'
  });
};

/***/ })

})
//# sourceMappingURL=main.b8885e3cff1ed1190cf9.hot-update.js.map