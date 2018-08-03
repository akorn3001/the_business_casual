import React from 'react';
// import DeleteArticleModal from '../../Modal/delete_Article_modal';
// import ModalRoot from '../../Modal/modal_root';

class ArticleIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
  }

  handleDeleteArticle(e) {
    e.preventDefault();
    const { article, showDeleteArticleModal } = this.props;
    showDeleteArticleModal(article.id);
  }

  render() {
    const { article } = this.props;

    return (
      <div className="article-index-item-container">
        <div className="article-index-item">
          <h3>{ article.title }</h3>
          <br />
          <h4>{ article.body }</h4>
          <span className="delete-article" onClick={this.handleDeleteArticle}>×</span>
        </div>
      </div>
    );
  }
}

export default ArticleIndexItem;
