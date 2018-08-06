import React from 'react';
import ArticleIndexItemContainer from '../ArticleIndexItem/article_index_item_container';

class ArticleIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllArticles();
  }

  render() {
    let articleType;
    articleType = (this.props.published ? "Published Articles" : "Unpublished Articles");

    return (
      <div className="article-index">
        <div className="unpublished-articles-index">
          <span>{articleType}</span>
          { this.props.articles.map(article => <ArticleIndexItemContainer key={article.id} article={article} />) }
        </div>
      </div>
    );
  }
}

export default ArticleIndex;
