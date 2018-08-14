webpackHotUpdate("main",{

/***/ "./frontend/components/Container/searchbar_container.jsx":
/*!***************************************************************!*\
  !*** ./frontend/components/Container/searchbar_container.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _searchbar = __webpack_require__(/*! ../Presentational/searchbar */ "./frontend/components/Presentational/searchbar.jsx");

var _searchbar2 = _interopRequireDefault(_searchbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, null)(_searchbar2.default));

/***/ }),

/***/ "./frontend/components/Presentational/header.jsx":
/*!*******************************************************!*\
  !*** ./frontend/components/Presentational/header.jsx ***!
  \*******************************************************/
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

var _searchbar_container = __webpack_require__(/*! ../Container/searchbar_container */ "./frontend/components/Container/searchbar_container.jsx");

var _searchbar_container2 = _interopRequireDefault(_searchbar_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.handleLogout = _this.handleLogout.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'handleLogout',
    value: function handleLogout(e) {
      var _this2 = this;

      e.preventDefault();
      this.props.logout().then(function () {
        _this2.props.history.push("/login");
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var currentUser = this.props.currentUser;


      var navigation = void 0;

      // TOP LEVEL NAVIGATION LINKS
      var aboutLink = _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/about' },
        'About'
      );
      var signUpLink = _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/signup', className: 'auth-link' },
        'Sign Up'
      );
      var dashboardLink = _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/profile' },
        'Admin Dashboard'
      );
      var signInLink = _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/login', className: 'auth-link' },
        'Sign In'
      );
      var signOutButton = _react2.default.createElement(
        'button',
        { className: 'auth-link', onClick: this.handleLogout },
        'Sign Out'
      );

      // CATEGORY LINKS
      var category1Link = _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/categories/1/articles' },
        'Category-1'
      );
      var category2Link = _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/category2' },
        'Category-2'
      );
      var category3Link = _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/category3' },
        'Category-3'
      );
      var category4Link = _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/category4' },
        'Category-4'
      );

      if (currentUser) {
        if (currentUser.admin) {
          navigation = _react2.default.createElement(
            'ul',
            { className: 'header-items' },
            _react2.default.createElement(
              'li',
              { className: 'header-link' },
              aboutLink
            ),
            _react2.default.createElement(
              'li',
              { className: 'header-category' },
              category1Link
            ),
            _react2.default.createElement(
              'li',
              { className: 'header-category' },
              category2Link
            ),
            _react2.default.createElement(
              'li',
              { className: 'header-category' },
              category3Link
            ),
            _react2.default.createElement(
              'li',
              { className: 'header-category' },
              category4Link
            ),
            _react2.default.createElement(
              'li',
              { className: 'header-link' },
              dashboardLink
            ),
            _react2.default.createElement(
              'li',
              { className: 'header-link' },
              signOutButton
            )
          );
        } else {
          navigation = _react2.default.createElement(
            'ul',
            { className: 'header-items' },
            _react2.default.createElement(
              'li',
              { className: 'header-link' },
              aboutLink
            ),
            _react2.default.createElement(
              'li',
              { className: 'header-category' },
              category1Link
            ),
            _react2.default.createElement(
              'li',
              { className: 'header-category' },
              category2Link
            ),
            _react2.default.createElement(
              'li',
              { className: 'header-category' },
              category3Link
            ),
            _react2.default.createElement(
              'li',
              { className: 'header-category' },
              category4Link
            ),
            _react2.default.createElement(
              'li',
              { className: 'header-link' },
              signOutButton
            )
          );
        }
      } else {
        navigation = _react2.default.createElement(
          'ul',
          { className: 'header-items' },
          _react2.default.createElement(
            'li',
            { className: 'header-link' },
            aboutLink
          ),
          _react2.default.createElement(
            'li',
            { className: 'header-category' },
            category1Link
          ),
          _react2.default.createElement(
            'li',
            { className: 'header-category' },
            category2Link
          ),
          _react2.default.createElement(
            'li',
            { className: 'header-category' },
            category3Link
          ),
          _react2.default.createElement(
            'li',
            { className: 'header-category' },
            category4Link
          ),
          _react2.default.createElement(
            'li',
            { className: 'header-link' },
            signInLink
          ),
          _react2.default.createElement(
            'li',
            { className: 'header-link' },
            signUpLink
          )
        );
      }

      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/articles' },
          _react2.default.createElement(
            'span',
            null,
            'The Business Casual'
          )
        ),
        navigation
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ })

})
//# sourceMappingURL=main.627d29269dc9d5aef20e.hot-update.js.map