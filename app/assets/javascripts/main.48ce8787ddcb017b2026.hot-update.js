webpackHotUpdate("main",{

/***/ "./frontend/components/Presentational/categorized_article_index.jsx":
/*!**************************************************************************!*\
  !*** ./frontend/components/Presentational/categorized_article_index.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _article_index_item_container = __webpack_require__(/*! ../Container/article_index_item_container */ "./frontend/components/Container/article_index_item_container.jsx");

var _article_index_item_container2 = _interopRequireDefault(_article_index_item_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategorizedArticleIndex = function (_React$Component) {
  _inherits(CategorizedArticleIndex, _React$Component);

  function CategorizedArticleIndex(props) {
    _classCallCheck(this, CategorizedArticleIndex);

    var _this = _possibleConstructorReturn(this, (CategorizedArticleIndex.__proto__ || Object.getPrototypeOf(CategorizedArticleIndex)).call(this, props));

    _this.receiveAllArticles = _this.receiveAllArticles.bind(_this);
    return _this;
  }

  _createClass(CategorizedArticleIndex, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var categoryID = this.props.match.params.categoryID;

      this.props.clearArticleState().then(function () {
        _this2.receiveAllArticles();
      });
    }
  }, {
    key: 'receiveAllArticles',
    value: function receiveAllArticles() {
      this.props.receiveAllArticles();
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'article-index' },
        this.props.categorizedArticles.map(function (article) {
          return _react2.default.createElement(_article_index_item_container2.default, {
            key: article.id,
            article: article
          });
        })
      );
    }
  }]);

  return CategorizedArticleIndex;
}(_react2.default.Component);

exports.default = CategorizedArticleIndex;

/***/ })

})
//# sourceMappingURL=main.48ce8787ddcb017b2026.hot-update.js.map