import React from 'react';
import ReactQuill from 'react-quill';
import DOMPurify from 'dompurify';
import { connect } from 'react-redux';
import { requestCreateArticle } from '../../../redux/actions/article_actions';

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      imageFile: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveForLater = this.handleSaveForLater.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.handleQuill = this.handleQuill.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleQuill(value) {
    this.setState({ body: value });
  }

  handleChange(attribute) {
    return (e) => {
      e.preventDefault();
      this.setState({ [attribute]: e.target.value });
    };
  }

  handlePublish(e) {
    e.preventDefault();
    const formDataObject = new FormData();
    formDataObject.append('article[title]', this.state.title);
    formDataObject.append('article[body]', this.state.body);
    formDataObject.append('article[published]', true);

    if (this.state.imageFile) {
      formDataObject.append('article[image]', this.state.imageFile);
    }

    this.props.requestCreateArticle(formDataObject)
    .then(() => {
      this.setState({ title: "", body: "", imageFile: null });
    });
  }

  handleSaveForLater(e) {
    e.preventDefault();
    const formDataObject = new FormData();
    formDataObject.append('article[title]', this.state.title);
    formDataObject.append('article[body]', this.state.body);

    if (this.state.imageFile) {
      formDataObject.append('article[image]', this.state.imageFile);
    }

    this.props.requestCreateArticle(formDataObject)
    .then(() => {
      this.setState({ title: "", body: "", imageFile: null });
    });
  }

  handleFile(e) {
    this.setState({ imageFile: e.currentTarget.files[0] });
  }

  render() {
    return (
      <div id="article-form">
        <form>
          <label htmlFor="title">Title: </label>
          <input
            onChange={this.handleChange('title')}
            className="article-form-title-input"
            value={this.state.title}
            name="title"
            type="text"
            placeholder="Add Title"
          />

          <ReactQuill
            className="quill-element"
            theme="snow"
            value={this.state.body}
            onChange={this.handleQuill}
            placeholder="Write your article here"
          />

          <input type="file" onChange={this.handleFile}/>

          <button className="article-form-button" onClick={this.handleSaveForLater}>Save for Later</button>
          <button className="article-form-button" onClick={this.handlePublish}>Publish Article</button>

        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    requestCreateArticle: (article) => dispatch(requestCreateArticle(article))
  };
};

export default connect(null, mapDispatchToProps)(ArticleForm);
