import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestAllArticles } from '../../redux/actions/article_actions';
import { requestAllCategories } from '../../redux/actions/category_actions';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.handleArticles = this.handleArticles.bind(this);
    this.handleCategories = this.handleCategories.bind(this);
  }

  handleArticles(e) {
    e.preventDefault();
    this.props.requestAllArticles();
  }

  handleCategories(e) {
    e.preventDefault();
    this.props.requestAllCategories();
  }

  render() {
    return (
      <div>
        <span>THIS IS A TEST</span>
        <button onClick={this.handleArticles}>Get Articles</button>
        <button onClick={this.handleCategories}>Get Categories</button>
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
    requestAllCategories: () => dispatch(requestAllCategories())
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));
