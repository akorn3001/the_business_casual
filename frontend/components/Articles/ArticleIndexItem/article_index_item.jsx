import React from 'react';
// import DeleteArticleModal from '../../Modal/delete_Article_modal';
// import ModalRoot from '../../Modal/modal_root';

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
    return { __html: this.props.article.body.slice(0, 300) + '...' };
  }

  render() {
    const { article } = this.props;

    return (
      <div className="article-index-item-container">
        <div className="article-index-item">
          <h1>{ article.title }</h1>
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
