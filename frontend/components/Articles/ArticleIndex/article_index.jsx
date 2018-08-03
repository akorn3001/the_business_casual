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
    const { articles } = this.props;

    return (
      <div className="article-index">
        <h1>ALL ARTICLES</h1>
        { articles.map(article => <ArticleIndexItemContainer key={article.id} article={article} />) }
      </div>
    );
  }
}

export default ArticleIndex;
