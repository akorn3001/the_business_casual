import React from 'react';
import ReactQuill from 'react-quill';
import DOMPurify from 'dompurify';

class ArticleEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      imageFile: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.handleSaveForLater = this.handleSaveForLater.bind(this);
    this.handleQuill = this.handleQuill.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleArticle(this.props.match.params.articleID)
    .then(article => {
      this.setState({
        title: article.title,
        body: article.body,
        imageFile: article.imageFile
      });
    });
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

  handleCancel(e) {
    e.preventDefault();
    this.props.history.push(`/articles/${this.props.article.id}`);
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

    this.props.requestUpdateArticle(formDataObject, this.props.article.id)
      .then(this.props.history.push('/articles'));
  }

  handleSaveForLater(e) {
    e.preventDefault();
    const formDataObject = new FormData();
    formDataObject.append('article[title]', this.state.title);
    formDataObject.append('article[body]', this.state.body);
    formDataObject.append('article[published]', false);

    if (this.state.imageFile) {
      formDataObject.append('article[image]', this.state.imageFile);
    }

    this.props.requestUpdateArticle(formDataObject, this.props.article.id)
    .then(this.props.history.push('/unpublished'));
  }


  handleFile(e) {
    this.setState({ imageFile: e.currentTarget.files[0] });
  }

  render() {
    let fileName;
    let component;

    if (this.state.imageFile) {
      fileName = <span id="image-upload-message">{this.state.imageFile.name} successfully attached</span>;
    } else {
      fileName = null;
    }

    fileName =
    (this.state.imageFile ?
      <span id="image-upload-message">{this.state.imageFile.name} successfully attached</span>
        : null);

    component =
    <div id="article-form">
      <form>
        <div className="article-form-title">
          <label htmlFor="title">Title: </label>
          <input
            onChange={this.handleChange('title')}
            className="article-form-title-input"
            value={this.state.title}
            name="title"
            type="text"
            placeholder="Add Title"
          />
        </div>

        <ReactQuill
          className="quill-element"
          theme="snow"
          value={this.state.body}
          onChange={this.handleQuill}
          placeholder="Write your article here"
        />

        <div className="article-form-submit-buttons">
          <input name="file-input" id="file-input" type="file" accept="image/*" onChange={this.handleFile}/>
          <label className="file-input-label form-submit" htmlFor="file-input">Upload an Image!</label>
          <button className="article-form-button form-submit" onClick={this.handleCancel}>Cancel Changes</button>
          <button className="article-form-button form-submit" onClick={this.handleSaveForLater}>Save for Later</button>
          <button className="article-form-button form-submit" onClick={this.handlePublish}>Save Changes!</button>
        </div>
        {fileName}
      </form>
    </div>;

    return (
      <div>
        { component }
      </div>
    );
  }
}



export default ArticleEdit;
