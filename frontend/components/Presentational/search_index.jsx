import React from 'react';
import ArticleIndexItemContainer from '../Container/article_index_item_container';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    const { imageDisplay } = this.props;
    return (
      <div className="article-index">
        { this.props.searchResults.map(article => <ArticleIndexItemContainer
          key={article.id}
          article={article}
          imageDisplay={imageDisplay} />) }
      </div>
    );
  }
}

export default SearchIndex;
