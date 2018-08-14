webpackHotUpdate("main",{

/***/ "./frontend/components/Presentational/article_index_item.jsx":
/*!*******************************************************************!*\
  !*** ./frontend/components/Presentational/article_index_item.jsx ***!
  \*******************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleIndexItem = function (_React$Component) {
  _inherits(ArticleIndexItem, _React$Component);

  function ArticleIndexItem(props) {
    _classCallCheck(this, ArticleIndexItem);

    var _this = _possibleConstructorReturn(this, (ArticleIndexItem.__proto__ || Object.getPrototypeOf(ArticleIndexItem)).call(this, props));

    _this.handleDeleteArticle = _this.handleDeleteArticle.bind(_this);
    _this.createMarkup = _this.createMarkup.bind(_this);
    _this.handleEdit = _this.handleEdit.bind(_this);
    return _this;
  }

  _createClass(ArticleIndexItem, [{
    key: 'handleDeleteArticle',
    value: function handleDeleteArticle(e) {
      e.preventDefault();
      var _props = this.props,
          article = _props.article,
          showDeleteArticleModal = _props.showDeleteArticleModal;

      showDeleteArticleModal(article.id);
    }
  }, {
    key: 'handleEdit',
    value: function handleEdit(e) {
      e.preventDefault();
      var _props2 = this.props,
          article = _props2.article,
          history = _props2.history;

      history.push('/edit-article/' + article.id);
    }
  }, {
    key: 'createMarkup',
    value: function createMarkup() {
      var body = this.props.article.body;

      if (body.length > 300) {
        return { __html: body.slice(0, 300) + '...' };
      } else {
        return { __html: body };
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var dangerButtons = void 0;
      var _props3 = this.props,
          article = _props3.article,
          imageDisplay = _props3.imageDisplay,
          currentUser = _props3.currentUser;

      var image = imageDisplay === false ? null : _react2.default.createElement('img', { src: article.imageURL });

      if (currentUser && currentUser.admin) {
        dangerButtons = _react2.default.createElement(
          'div',
          { className: 'danger-buttons' },
          _react2.default.createElement(
            'button',
            { className: 'delete-article', onClick: this.handleDeleteArticle },
            'Delete'
          ),
          _react2.default.createElement(
            'button',
            { className: 'edit-article', onClick: this.handleEdit },
            'Edit'
          )
        );
      } else dangerButtons = null;

      return _react2.default.createElement(
        'div',
        { className: 'article-index-item-container' },
        _react2.default.createElement(
          'div',
          { className: 'article-index-item' },
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/articles/' + article.id },
              article.title
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/articles/' + article.id },
            image
          ),
          _react2.default.createElement('div', { dangerouslySetInnerHTML: this.createMarkup() }),
          dangerButtons
        )
      );
    }
  }]);

  return ArticleIndexItem;
}(_react2.default.Component);

exports.default = ArticleIndexItem;

/***/ })

})
//# sourceMappingURL=main.f566b1efbbef37c6cabb.hot-update.js.map