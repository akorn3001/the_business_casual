import React from 'react';
import ArticleIndexItemContainer from '../Container/article_index_item_container';

class CategorizedArticleIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { categoryID } = this.props.match.params;
    this.props.clearArticleState();
    this.props.requestAllCategorizedArticles(categoryID);
  }

  render() {
    let component;

    const { categorizedArticles } = this.props;

    if (categorizedArticles) {
      component =
      <div className="article-index categorized-article-index">
        { categorizedArticles.map(article => <ArticleIndexItemContainer
          key={article.id}
          article={article}
           />)
       }
     </div>;
    } else component = null;

    return (
      component
    );
  }
}

export default CategorizedArticleIndex;
