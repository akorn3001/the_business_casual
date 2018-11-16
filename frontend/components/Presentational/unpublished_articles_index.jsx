import React from 'react';
import ArticleIndexContainer from '../Container/article_index_container';

class UnpublishedArticlesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="unpublished-articles-index">
          <h1>Unpublished Articles</h1>
          <button className="form-submit publish-all">Publish All</button>
          <ArticleIndexContainer published={false} />
        </div>
      </div>
    );
  }
}

export default UnpublishedArticlesIndex;
