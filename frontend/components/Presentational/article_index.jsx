import React from 'react';
import ArticleIndexItemContainer from '../Container/article_index_item_container'

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
        <h1>{articleType}</h1>
        { this.props.articles.map(article => <ArticleIndexItemContainer key={article.id} article={article} />) }
      </div>
    );
  }
}

export default ArticleIndex;
