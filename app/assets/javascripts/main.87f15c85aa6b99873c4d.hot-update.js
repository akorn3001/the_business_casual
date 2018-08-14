webpackHotUpdate("main",{

/***/ "./frontend/components/Presentational/unpublished_articles_index.jsx":
/*!***************************************************************************!*\
  !*** ./frontend/components/Presentational/unpublished_articles_index.jsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _article_index_container = __webpack_require__(/*! ../Container/article_index_container */ "./frontend/components/Container/article_index_container.jsx");

var _article_index_container2 = _interopRequireDefault(_article_index_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnpublishedArticlesIndex = function (_React$Component) {
  _inherits(UnpublishedArticlesIndex, _React$Component);

  function UnpublishedArticlesIndex(props) {
    _classCallCheck(this, UnpublishedArticlesIndex);

    return _possibleConstructorReturn(this, (UnpublishedArticlesIndex.__proto__ || Object.getPrototypeOf(UnpublishedArticlesIndex)).call(this, props));
  }

  _createClass(UnpublishedArticlesIndex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'unpublished-articles-index' },
          _react2.default.createElement(_article_index_container2.default, { published: false })
        )
      );
    }
  }]);

  return UnpublishedArticlesIndex;
}(_react2.default.Component);

exports.default = UnpublishedArticlesIndex;

/***/ })

})
//# sourceMappingURL=main.87f15c85aa6b99873c4d.hot-update.js.map