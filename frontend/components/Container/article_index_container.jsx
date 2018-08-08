import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestAllArticles } from '../../redux/actions/article_actions';
import { selectAllArticles } from '../../redux/reducers/selectors';
import ArticleIndex from '../Presentational/article_index';


const mapStateToProps = (state, ownProps) => {
  let articles;

  if (ownProps.published) {
    articles = selectAllArticles(state).filter((article) => article.published).reverse();
  } else {
    articles = selectAllArticles(state).filter((article) => !article.published);
  }

  return {
    allArticles: selectAllArticles(state),
    articles
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestAllArticles: () => dispatch(requestAllArticles())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleIndex));
