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

var _searchbar = __webpack_require__(/*! ./Presentational/searchbar */ "./frontend/components/Presentational/searchbar.jsx");

var _searchbar2 = _interopRequireDefault(_searchbar);

var _unpublished_articles_index_container = __webpack_require__(/*! ./Container/unpublished_articles_index_container */ "./frontend/components/Container/unpublished_articles_index_container.jsx");

var _unpublished_articles_index_container2 = _interopRequireDefault(_unpublished_articles_index_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_header_container2.default, null),
    _react2.default.createElement(_modal_root2.default, null),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: "/categories/:categoryID/articles", exact: true, component: _categorized_article_index_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/articles', exact: true, component: _home_page_container2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/articles/:articleID', exact: true, component: _article_show_container2.default })
    ),
    _react2.default.createElement(_route_util.AuthRoute, { path: '/login', exact: true, component: _session_form_container2.default }),
    _react2.default.createElement(_route_util.AuthRoute, { path: '/signup', exact: true, component: _session_form_container2.default }),
    _react2.default.createElement(_route_util.AdminRoute, { path: '/profile', component: _admin_dashboard_container2.default }),
    _react2.default.createElement(_route_util.AdminRoute, { path: '/unpublished', component: _unpublished_articles_index_container2.default }),
    _react2.default.createElement(_route_util.AdminRoute, { path: 'edit-article/:articleID', exact: true, component: _article_edit_container2.default })
  );
};

exports.default = App;

/***/ })

})
//# sourceMappingURL=main.599f4c8b56dd0d7cd598.hot-update.js.map