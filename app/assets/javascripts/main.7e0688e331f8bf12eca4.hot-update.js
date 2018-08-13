webpackHotUpdate("main",{

/***/ "./frontend/components/app.jsx":
/*!*************************************!*\
  !*** ./frontend/components/app.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _header_container = __webpack_require__(/*! ./Container/header_container */ "./frontend/components/Container/header_container.jsx");

var _header_container2 = _interopRequireDefault(_header_container);

var _modal_root = __webpack_require__(/*! ./Modal/modal_root */ "./frontend/components/Modal/modal_root.jsx");

var _modal_root2 = _interopRequireDefault(_modal_root);

var _category_index_container = __webpack_require__(/*! ./Container/category_index_container */ "./frontend/components/Container/category_index_container.jsx");

var _category_index_container2 = _interopRequireDefault(_category_index_container);

var _article_index_container = __webpack_require__(/*! ./Container/article_index_container */ "./frontend/components/Container/article_index_container.jsx");

var _article_index_container2 = _interopRequireDefault(_article_index_container);

var _article_show_container = __webpack_require__(/*! ./Container/article_show_container */ "./frontend/components/Container/article_show_container.jsx");

var _article_show_container2 = _interopRequireDefault(_article_show_container);

var _article_form_container = __webpack_require__(/*! ./Container/article_form_container */ "./frontend/components/Container/article_form_container.jsx");

var _article_form_container2 = _interopRequireDefault(_article_form_container);

var _session_form_container = __webpack_require__(/*! ./Container/session_form_container */ "./frontend/components/Container/session_form_container.jsx");

var _session_form_container2 = _interopRequireDefault(_session_form_container);

var _admin_dashboard_container = __webpack_require__(/*! ./Container/admin_dashboard_container */ "./frontend/components/Container/admin_dashboard_container.jsx");

var _admin_dashboard_container2 = _interopRequireDefault(_admin_dashboard_container);

var _home_page_container = __webpack_require__(/*! ./Container/home_page_container */ "./frontend/components/Container/home_page_container.jsx");

var _home_page_container2 = _interopRequireDefault(_home_page_container);

var _article_edit_container = __webpack_require__(/*! ./Container/article_edit_container */ "./frontend/components/Container/article_edit_container.jsx");

var _article_edit_container2 = _interopRequireDefault(_article_edit_container);

var _categorized_article_index_container = __webpack_require__(/*! ./Container/categorized_article_index_container */ "./frontend/components/Container/categorized_article_index_container.jsx");

var _categorized_article_index_container2 = _interopRequireDefault(_categorized_article_index_container);

var _route_util = __webpack_require__(/*! ../redux/util/route_util */ "./frontend/redux/util/route_util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_header_container2.default, null),
    _react2.default.createElement(_modal_root2.default, null),
    _react2.default.createElement(_admin_dashboard_container2.default, null),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: "/categories/:categoryID/articles", exact: true, component: _categorized_article_index_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/articles', exact: true, component: _home_page_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/articles/:articleID', exact: true, component: _article_show_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/edit-article/:articleID', exact: true, component: _article_edit_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _session_form_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _session_form_container2.default })
    ),
    _react2.default.createElement(_route_util.AdminRoute, { path: '/profile', component: _admin_dashboard_container2.default })
  );
};

exports.default = App;

/***/ }),

/***/ "./frontend/redux/util/route_util.js":
/*!*******************************************!*\
  !*** ./frontend/redux/util/route_util.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: Unexpected token (24:6)\n\n\u001b[0m \u001b[90m 22 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mAdmin\u001b[39m \u001b[33m=\u001b[39m ({ component\u001b[33m:\u001b[39m \u001b[33mComponent\u001b[39m\u001b[33m,\u001b[39m path\u001b[33m,\u001b[39m loggedIn\u001b[33m,\u001b[39m currentUser }) \u001b[33m=>\u001b[39m {\n \u001b[90m 23 | \u001b[39m  \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mRoute\u001b[39m path\u001b[33m=\u001b[39m{path} render\u001b[33m=\u001b[39m{(props) \u001b[33m=>\u001b[39m (\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 24 | \u001b[39m      \u001b[36mif\u001b[39m (loggedIn \u001b[33m&&\u001b[39m currentUser\u001b[33m.\u001b[39madmin) {\n \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 25 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mComponent\u001b[39m {\u001b[33m...\u001b[39mprops} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 26 | \u001b[39m      } \u001b[36melse\u001b[39m {\n \u001b[90m 27 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mRedirect\u001b[39m to\u001b[33m=\u001b[39m\u001b[32m\"/login\"\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ })

})
//# sourceMappingURL=main.7e0688e331f8bf12eca4.hot-update.js.map