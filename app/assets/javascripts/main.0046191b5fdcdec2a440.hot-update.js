webpackHotUpdate("main",{

/***/ "./frontend/components/Presentational/article_edit.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/Presentational/article_edit.jsx ***!
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

var _reactQuill = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");

var _reactQuill2 = _interopRequireDefault(_reactQuill);

var _dompurify = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");

var _dompurify2 = _interopRequireDefault(_dompurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleEdit = function (_React$Component) {
  _inherits(ArticleEdit, _React$Component);

  function ArticleEdit(props) {
    _classCallCheck(this, ArticleEdit);

    var _this = _possibleConstructorReturn(this, (ArticleEdit.__proto__ || Object.getPrototypeOf(ArticleEdit)).call(this, props));

    _this.state = {
      title: "",
      body: "",
      imageFile: null
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handlePublish = _this.handlePublish.bind(_this);
    _this.handleQuill = _this.handleQuill.bind(_this);
    _this.handleFile = _this.handleFile.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  _createClass(ArticleEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.requestSingleArticle(this.props.match.params.articleID);
      if (this.props.article) {
        this.setState({
          title: this.props.article.title,
          body: this.props.article.body,
          imageFile: this.props.article.imageFile
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.article && this.props.article) {
        this.setState({
          title: this.props.article.title,
          body: this.props.article.body,
          imageFile: this.props.article.imageFile
        });
      }
    }
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.article) {
    //     this.setState({
    //       title: nextProps.article.title,
    //       body: nextProps.article.body,
    //       imageFile: nextProps.article.imageFile
    //     });
    //   }
    // }

  }, {
    key: 'handleQuill',
    value: function handleQuill(value) {
      this.setState({ body: value });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(attribute) {
      var _this2 = this;

      return function (e) {
        e.preventDefault();
        _this2.setState(_defineProperty({}, attribute, e.target.value));
      };
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel(e) {
      e.preventDefault();
      this.props.history.push('/articles/' + this.props.article.id);
    }
  }, {
    key: 'handlePublish',
    value: function handlePublish(e) {
      e.preventDefault();
      var formDataObject = new FormData();
      formDataObject.append('article[title]', this.state.title);
      formDataObject.append('article[body]', this.state.body);
      formDataObject.append('article[published]', true);

      if (this.state.imageFile) {
        formDataObject.append('article[image]', this.state.imageFile);
      }

      this.props.requestUpdateArticle(formDataObject, this.props.article.id).then(this.props.history.push('/articles'));
    }
  }, {
    key: 'handleFile',
    value: function handleFile(e) {
      this.setState({ imageFile: e.currentTarget.files[0] });
    }
  }, {
    key: 'render',
    value: function render() {

      var fileName = void 0;
      var component = void 0;

      fileName = this.state.imageFile ? _react2.default.createElement(
        'span',
        { id: 'image-upload-message' },
        this.state.imageFile.name,
        ' successfully attached'
      ) : null;

      component = _react2.default.createElement(
        'div',
        { id: 'article-form' },
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'div',
            { className: 'article-form-title' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'title' },
              'Title: '
            ),
            _react2.default.createElement('input', {
              onChange: this.handleChange('title'),
              className: 'article-form-title-input',
              value: this.state.title,
              name: 'title',
              type: 'text',
              placeholder: 'Add Title'
            })
          ),
          _react2.default.createElement(_reactQuill2.default, {
            className: 'quill-element',
            theme: 'snow',
            value: this.state.body,
            onChange: this.handleQuill,
            placeholder: 'Write your article here'
          }),
          _react2.default.createElement(
            'div',
            { className: 'article-form-submit-buttons' },
            _react2.default.createElement('input', { name: 'file-input', id: 'file-input', type: 'file', accept: 'image/*', onChange: this.handleFile }),
            _react2.default.createElement(
              'label',
              { className: 'file-input-label form-submit', htmlFor: 'file-input' },
              'Upload an Image!'
            ),
            _react2.default.createElement(
              'button',
              { className: 'article-form-button form-submit', onClick: this.handleCancel },
              'Cancel Changes'
            ),
            _react2.default.createElement(
              'button',
              { className: 'article-form-button form-submit', onClick: this.handlePublish },
              'Save Changes!'
            )
          ),
          fileName
        )
      );

      return _react2.default.createElement(
        'div',
        null,
        component
      );
    }
  }]);

  return ArticleEdit;
}(_react2.default.Component);

exports.default = ArticleEdit;

/***/ })

})
//# sourceMappingURL=main.0046191b5fdcdec2a440.hot-update.js.map