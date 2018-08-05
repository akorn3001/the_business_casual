import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestAllArticles } from '../../../redux/actions/article_actions';
import { selectAllArticles } from '../../../redux/reducers/selectors';
import ArticleIndex from './article_index';


const mapStateToProps = state => {
  return {
    articles: selectAllArticles(state)
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestAllArticles: () => dispatch(requestAllArticles())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleIndex));
