import React from 'react';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { requestCreateArticle } from '../../../redux/actions/article_actions';

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      image: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveForLater = this.handleSaveForLater.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.handleQuill = this.handleQuill.bind(this);
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
    const category = { title: this.state.title, body: this.state.body, published: true };

    this.props.requestCreateArticle(category)
    .then(() => {
      this.setState({ title: "", body: "" });
    });
  }

  handleSaveForLater(e) {
    e.preventDefault();
    const category = { title: this.state.title, body: this.state.body };
    debugger
    this.props.requestCreateArticle(category)
    .then(() => {
      this.setState({ title: "", body: "" });
    });
  }



  render() {
    return (
      <div id="article-form">
        <form>
          <input
            onChange={this.handleChange("title")}
            className="article-form-title-input"
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
