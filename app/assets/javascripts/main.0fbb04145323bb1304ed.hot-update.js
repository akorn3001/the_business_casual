webpackHotUpdate("main",{

/***/ "./frontend/redux/actions/session_actions.js":
/*!***************************************************!*\
  !*** ./frontend/redux/actions/session_actions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSingleUser = exports.requestCurrentUser = exports.logout = exports.login = exports.signUp = exports.deleteAllErrors = exports.clearErrors = exports.resetState = exports.receiveSignUpErrors = exports.receiveSessionErrors = exports.receiveCurrentUser = exports.LOG_OUT = exports.CLEAR_ERRORS = exports.RECEIVE_SIGNUP_ERRORS = exports.RECEIVE_SESSION_ERRORS = exports.RECEIVE_CURRENT_USER = undefined;

var _session_api_util = __webpack_require__(/*! ../util/session_api_util */ "./frontend/redux/util/session_api_util.js");

var SessionAPIUtil = _interopRequireWildcard(_session_api_util);

var _users_api_util = __webpack_require__(/*! ../util/users_api_util */ "./frontend/redux/util/users_api_util.js");

var UserAPIUtil = _interopRequireWildcard(_users_api_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RECEIVE_CURRENT_USER = exports.RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
var RECEIVE_SESSION_ERRORS = exports.RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
var RECEIVE_SIGNUP_ERRORS = exports.RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
var CLEAR_ERRORS = exports.CLEAR_ERRORS = "CLEAR_ERRORS";
var LOG_OUT = exports.LOG_OUT = "LOG_OUT";

var receiveCurrentUser = exports.receiveCurrentUser = function receiveCurrentUser(currentUser) {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
};

var receiveSessionErrors = exports.receiveSessionErrors = function receiveSessionErrors(errors) {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};

var receiveSignUpErrors = exports.receiveSignUpErrors = function receiveSignUpErrors(errors) {
  return {
    type: RECEIVE_SIGNUP_ERRORS,
    errors: errors
  };
};

var resetState = exports.resetState = function resetState() {
  return {
    type: LOG_OUT
  };
};

var clearErrors = exports.clearErrors = function clearErrors() {
  return {
    type: CLEAR_ERRORS
  };
};

var deleteAllErrors = exports.deleteAllErrors = function deleteAllErrors() {
  return function (dispatch) {
    return dispatch(clearErrors());
  };
};

var signUp = exports.signUp = function signUp(user) {
  return function (dispatch) {
    return SessionAPIUtil.signUp(user).then(function (user) {
      dispatch(receiveCurrentUser(user));
      return user;
    }, function (errors) {
      dispatch(receiveSignUpErrors(errors.responseJSON));
      return errors;
    });
  };
};

var login = exports.login = function login(user) {
  return function (dispatch) {
    return SessionAPIUtil.login(user).then(function (user) {
      dispatch(receiveCurrentUser(user));
      return user;
    }, function (errors) {
      dispatch(receiveSessionErrors(errors.responseJSON));
      return errors;
    });
  };
};

var logout = exports.logout = function logout() {
  return function (dispatch) {
    return SessionAPIUtil.logout().then(function (response) {
      dispatch(resetState());
      dispatch(receiveCurrentUser(null));
      return response;
    });
  };
};

var requestCurrentUser = exports.requestCurrentUser = function requestCurrentUser(user_id) {
  return function (dispatch) {
    return UserAPIUtil.fetchSingleUser(user_id).then(function (user) {
      dispatch(receiveCurrentUser(user));
      return user;
    });
  };
};

var updateSingleUser = exports.updateSingleUser = function updateSingleUser(user) {
  return function (dispatch) {
    return UserAPIUtil.updateSingleUser(user).then(function (updatedUser) {
      dispatch(receiveCurrentUser(updatedUser));
      return user;
    });
  };
};

/***/ })

})
//# sourceMappingURL=main.0fbb04145323bb1304ed.hot-update.js.map