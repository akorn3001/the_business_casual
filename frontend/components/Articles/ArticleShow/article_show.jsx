import React from 'react';

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { thisArticle: null };
  }

  componentDidMount() {
    this.props.requestSingleArticle(this.props.match.params.articleID);
  }

  render() {
    console.log(this.props.articles);
    return (
      <div className="article-show">

      </div>
    );
  }
}

export default ArticleShow;
