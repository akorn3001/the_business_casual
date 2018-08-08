import React from 'react';
import ArticleIndexItemContainer from '../Container/article_index_item_container';

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { thisArticle: null };
  }

  componentDidMount() {
    this.props.requestSingleArticle(this.props.match.params.articleID);
  }

  render() {
    let component;
    if (this.props.article) {
      debugger
      component =
      <div className="article-show-page">
        <h1>{this.props.article.title}</h1>
        <img src={this.props.article.imageURL} />
      </div>;
    } else {
      component = null;
    }

    return (
      <div className="article-show">
        { component }
      </div>
    );
  }
}

export default ArticleShow;
