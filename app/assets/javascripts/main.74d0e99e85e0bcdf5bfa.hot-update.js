webpackHotUpdate("main",{

/***/ "./frontend/components/Presentational/article_show.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/Presentational/article_show.jsx ***!
  \*************************************************************/
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

var _article_index_item_container = __webpack_require__(/*! ../Container/article_index_item_container */ "./frontend/components/Container/article_index_item_container.jsx");

var _article_index_item_container2 = _interopRequireDefault(_article_index_item_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleShow = function (_React$Component) {
  _inherits(ArticleShow, _React$Component);

  function ArticleShow(props) {
    _classCallCheck(this, ArticleShow);

    var _this = _possibleConstructorReturn(this, (ArticleShow.__proto__ || Object.getPrototypeOf(ArticleShow)).call(this, props));

    _this.createMarkup = _this.createMarkup.bind(_this);
    return _this;
  }

  _createClass(ArticleShow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.requestSingleArticle(this.props.match.params.articleID);
      window.scrollTo(0, 0);
    }
  }, {
    key: 'createMarkup',
    value: function createMarkup() {
      var body = this.props.article.body;

      return { __html: body };
    }
  }, {
    key: 'render',
    value: function render() {
      // let lastArticle = <Link to={`/articles/${Number(this.props.match.params.articleID) - 1}`}>Previous Article</Link>;
      // let nextArticle = <Link to={`/articles/${Number(this.props.match.params.articleID) + 1}`}>Next Article</Link>;
      var component = void 0;

      if (this.props.article) {
        var article = this.props.article;

        component = _react2.default.createElement(
          'div',
          { className: 'article-show' },
          _react2.default.createElement(
            'h1',
            { className: 'article-show-title' },
            article.title
          ),
          _react2.default.createElement('img', { className: 'article-show-image', src: article.imageURL }),
          _react2.default.createElement('div', { className: 'article-show-body', dangerouslySetInnerHTML: this.createMarkup() })
        );
      } else {
        component = null;
      }

      return _react2.default.createElement(
        'div',
        null,
        component
      );
    }
  }]);

  return ArticleShow;
}(_react2.default.Component);

exports.default = ArticleShow;

/***/ })

})
//# sourceMappingURL=main.74d0e99e85e0bcdf5bfa.hot-update.js.map