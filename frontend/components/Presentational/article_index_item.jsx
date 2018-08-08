import React from 'react';
import { Link } from 'react-router-dom';

class ArticleIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }

  handleDeleteArticle(e) {
    e.preventDefault();
    const { article, showDeleteArticleModal } = this.props;
    showDeleteArticleModal(article.id);
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
    const { article } = this.props;

    return (
      <div className="article-index-item-container">
        <div className="article-index-item">
          <h2><Link to={`/articles/${article.id}`}>{ article.title }</Link></h2>
          <br />
          <img src={article.imageURL} />
          <div dangerouslySetInnerHTML={this.createMarkup()} />
          <span className="delete-article" onClick={this.handleDeleteArticle}>×</span>
        </div>
      </div>
    );
  }
}

export default ArticleIndexItem;
