import React from 'react';
import ArticleIndexItemContainer from '../Container/article_index_item_container';

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);

    this.createMarkup = this.createMarkup.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleArticle(this.props.match.params.articleID);
    window.scrollTo(0, 0);
  }

  createMarkup() {
    const { body } = this.props.article;
    return {__html: body};
  }

  render() {
    let component;
    if (this.props.article) {
      const { article } = this.props;
      component =
      <div className="article-show">
        <h1>{article.title}</h1>
        <img src={article.imageURL} />
        <div className="article-show-body" dangerouslySetInnerHTML={this.createMarkup()} />
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
