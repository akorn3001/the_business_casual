import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestAllArticles, requestSingleArticle, requestDeleteArticle } from '../redux/actions/article_actions';
import { requestAllCategories, requestSingleCategory, requestDeleteCategory } from '../redux/actions/category_actions';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.handleArticles = this.handleArticles.bind(this);
    this.handleCategories = this.handleCategories.bind(this);
    this.handleFirstCategory = this.handleFirstCategory.bind(this);
    this.handleSecondCategory = this.handleSecondCategory.bind(this);
    this.handleArticle = this.handleArticle.bind(this);
    this.handleDeleteLastCategory = this.handleDeleteLastCategory.bind(this);
    this.handleDeleteLastArticle = this.handleDeleteLastArticle.bind(this);
  }

  handleArticles(e) {
    e.preventDefault();
    this.props.requestAllArticles();
  }

  handleArticle(e) {
    e.preventDefault();
    this.props.requestSingleArticle(1);
  }

  handleCategories(e) {
    e.preventDefault();
    this.props.requestAllCategories();
  }

  handleFirstCategory(e) {
    e.preventDefault();
    this.props.requestSingleCategory(1);
  }

  handleSecondCategory(e) {
    e.preventDefault();
    this.props.requestSingleCategory(2);
  }

  handleDeleteLastCategory(e) {
    e.preventDefault();
    this.props.requestDeleteCategory(13);
  }

  handleDeleteLastArticle(e) {
    e.preventDefault();
    this.props.requestDeleteArticle(25);
  }

  render() {
    return (
      <div>
        <span>THIS IS A TEST</span>
        <button onClick={this.handleArticles}>Get Articles</button>
        <button onClick={this.handleCategories}>Get Categories</button>
        <button onClick={this.handleFirstCategory}>Get First Category</button>
        <button onClick={this.handleSecondCategory}>Get Second Category</button>
        <button onClick={this.handleArticle}>Get First Article</button>
        <button onClick={this.handleDeleteLastCategory}>Delete Last Category</button>
        <button onClick={this.handleDeleteLastArticle}>Delete Last Article</button>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestAllArticles: () => dispatch(requestAllArticles()),
    requestAllCategories: () => dispatch(requestAllCategories()),
    requestSingleCategory: (category_id) => dispatch(requestSingleCategory(category_id)),
    requestSingleArticle: (article_id) => dispatch(requestSingleArticle(article_id)),
    requestDeleteCategory: (category_id) => dispatch(requestDeleteCategory(category_id)),
    requestDeleteArticle: (article_id) => dispatch(requestDeleteArticle(article_id))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));
