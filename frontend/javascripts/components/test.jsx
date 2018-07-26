import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestAllArticles } from '../../redux/actions/test_actions';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.handleArticles = this.handleArticles.bind(this);
    // this.handleArticle = this.handleArticle.bind(this);
  }

  handleArticles(e) {
    e.preventDefault();
    this.props.requestAllArticles();
  }

  // handleArticle(e) {
  //   e.preventDefault();
  //   this.props.requestSingleArticle()
  // }

  render() {
    return (
      <div>
        <span>THIS IS A TEST</span>
        <button onClick={this.handleArticles}>Get Articles</button>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    // currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestAllArticles: () => dispatch(requestAllArticles())
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));
