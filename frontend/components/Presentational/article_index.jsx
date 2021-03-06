import React from 'react';
import ArticleIndexItemContainer from '../Container/article_index_item_container';

class ArticleIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllArticles();
  }

  render() {
    const { imageDisplay } = this.props;
    return (
      <div className="article-index">
        { this.props.articles.map(article => <ArticleIndexItemContainer
          key={article.id}
          article={article}
          imageDisplay={imageDisplay} />) }
      </div>
    );
  }
}

export default ArticleIndex;
