webpackHotUpdate("main",{

/***/ "./frontend/components/Presentational/admin_dashboard.jsx":
/*!****************************************************************!*\
  !*** ./frontend/components/Presentational/admin_dashboard.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _category_index_container = __webpack_require__(/*! ../Container/category_index_container */ "./frontend/components/Container/category_index_container.jsx");

var _category_index_container2 = _interopRequireDefault(_category_index_container);

var _article_index_container = __webpack_require__(/*! ../Container/article_index_container */ "./frontend/components/Container/article_index_container.jsx");

var _article_index_container2 = _interopRequireDefault(_article_index_container);

var _article_form_container = __webpack_require__(/*! ../Container/article_form_container */ "./frontend/components/Container/article_form_container.jsx");

var _article_form_container2 = _interopRequireDefault(_article_form_container);

var _admin_sidebar_container = __webpack_require__(/*! ../Container/admin_sidebar_container */ "./frontend/components/Container/admin_sidebar_container.jsx");

var _admin_sidebar_container2 = _interopRequireDefault(_admin_sidebar_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminDashboard = function (_React$Component) {
  _inherits(AdminDashboard, _React$Component);

  function AdminDashboard(props) {
    _classCallCheck(this, AdminDashboard);

    return _possibleConstructorReturn(this, (AdminDashboard.__proto__ || Object.getPrototypeOf(AdminDashboard)).call(this, props));
  }

  _createClass(AdminDashboard, [{
    key: 'render',
    value: function render() {
      return (
        // <div className="admin-dash">
        //   <div className="admin-dash-category-index">
        //     <CategoryIndexContainer />
        //   </div>
        //
        //   <div className="admin-dash-published-articles">
        //     <ArticleIndexContainer imageDisplay={false} published={true} />
        //   </div>
        //
        //   <div className="admin-dash-unpublished-articles">
        //     <ArticleIndexContainer imageDisplay={false} published={false} />
        //   </div>
        // </div>
        // <div className="admin-dash">
        //   <div className="admin-dash-sidebar">
        //     <AdminSidebarContainer />
        //   </div>
        //
        //   <div className="admin-dash-form">
        //     <ArticleFormContainer />
        //   </div>
        // </div>
        _react2.default.createElement(
          'div',
          { className: 'admin-dash' },
          _react2.default.createElement(
            'div',
            { id: 'admin-dash-left', className: 'admin-dash-column' },
            _react2.default.createElement(
              'div',
              { className: 'admin-dash-bottom' },
              _react2.default.createElement(_admin_sidebar_container2.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'admin-dash-right', className: 'admin-dash-column' },
            _react2.default.createElement(
              'div',
              { className: 'admin-dash-bottom' },
              _react2.default.createElement(_article_form_container2.default, null)
            )
          )
        )
      );
    }
  }]);

  return AdminDashboard;
}(_react2.default.Component);

exports.default = AdminDashboard;

/***/ })

})
//# sourceMappingURL=main.ed998c1abce49d2a9a77.hot-update.js.map