import React from 'react';
import ArticleIndexItemContainer from '../Container/article_index_item_container';

class CategorizedArticleIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { categoryID } = this.props.match.params;
    // this.props.clearArticleState();
    this.props.requestAllCategorizedArticles(categoryID);
  }

  render() {

    return (
      <div className="article-index">
        { this.props.categorizedArticles.map(article => <ArticleIndexItemContainer
          key={article.id}
          article={article}
           />)
       }
      </div>
    );
  }
}

export default CategorizedArticleIndex;
