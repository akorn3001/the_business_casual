import React from 'react';
import ArticleIndexContainer from '../Container/article_index_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="home-page-published-articles">
          <ArticleIndexContainer published={true} />
        </div>
      </div>
    );
  }
}

export default HomePage;
