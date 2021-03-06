import React from 'react';
import { Link } from 'react-router-dom';

class ArticleIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
  }

  handleDeleteArticle(e) {
    e.preventDefault();
    const { article, showDeleteArticleModal } = this.props;
    showDeleteArticleModal(article.id);
  }

  handlePublish(e) {
    e.preventDefault();
    const { article } = this.props;
    const formDataObject = new FormData();
    formDataObject.append('article[title]', article.title);
    formDataObject.append('article[body]', article.body);
    formDataObject.append('article[published]', true);

    if (article.imageFile) {
      formDataObject.append('article[image]', article.imageFile);
    }

    this.props.requestUpdateArticle(formDataObject, article.id)
      .then(this.props.history.push('/articles'));
  }

  handleEdit(e) {
    e.preventDefault();
    const { article, history } = this.props;
    history.push(`/edit-article/${article.id}`);
  }

  createMarkup() {
    const { body } = this.props.article;
    if (body.length > 300) {
      return { __html: body.slice(0, 300) + '...' };
    } else {
      return {__html: body};
    }
  }

  render() {
    let dangerButtons;
    let publishButton;

    const { article, imageDisplay, currentUser } = this.props;
    const image = (imageDisplay === false ? null : <img src={article.imageURL} />);

    if (!article.published) {
      publishButton =
      <button className="publish-article" onClick={this.handlePublish}>Publish</button>;
    } else {
      publishButton = null;
    }

    if (currentUser && currentUser.admin) {
      dangerButtons =
      <div className="danger-buttons">
        <button className="delete-article" onClick={this.handleDeleteArticle}>Delete</button>
        <button className="edit-article" onClick={this.handleEdit}>Edit</button>
        { publishButton }
      </div>;
    } else dangerButtons = null;


    return (
      <div className="article-index-item-wrapper">
        <div className="article-index-item">
          <h2><Link to={`/articles/${article.id}`}>{ article.title }</Link></h2>
          <br />
          <Link to={`/articles/${article.id}`}>{image}</Link>
          <div dangerouslySetInnerHTML={this.createMarkup()} />
          { dangerButtons }
        </div>
      </div>
    );
  }
}

export default ArticleIndexItem;
