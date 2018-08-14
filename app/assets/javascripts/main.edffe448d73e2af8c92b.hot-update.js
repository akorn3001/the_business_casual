webpackHotUpdate("main",{

/***/ "./frontend/components/Presentational/searchbar.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/Presentational/searchbar.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Searchbar = function (_React$Component) {
  _inherits(Searchbar, _React$Component);

  function Searchbar(props) {
    _classCallCheck(this, Searchbar);

    var _this = _possibleConstructorReturn(this, (Searchbar.__proto__ || Object.getPrototypeOf(Searchbar)).call(this, props));

    _this.state = {
      query: ""
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);
    return _this;
  }

  _createClass(Searchbar, [{
    key: "handleChange",
    value: function handleChange(field) {
      var _this2 = this;

      return function (e) {
        _this2.setState(_defineProperty({}, field, e.target.value));
      };
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      e.preventDefault();
      // const user = Object.assign({}, this.state);
      //
      // this.props.processForm(user);
      alert("You typed: " + this.state.query);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "searchbar-wrapper" },
        _react2.default.createElement(
          "div",
          { className: "searchbar" },
          _react2.default.createElement("img", { src: window.staticImages.magnifyingGlass }),
          _react2.default.createElement(
            "form",
            { onSubmit: this.handleSearch },
            _react2.default.createElement("input", {
              className: "search-input",
              type: "text",
              placeholder: "Search...",
              value: this.state.query,
              onChange: this.handleChange("query")
            }),
            _react2.default.createElement(
              "button",
              { className: "search-button" },
              "Search"
            )
          )
        )
      );
    }
  }]);

  return Searchbar;
}(_react2.default.Component);

exports.default = Searchbar;

/***/ })

})
//# sourceMappingURL=main.edffe448d73e2af8c92b.hot-update.js.map