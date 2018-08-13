import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearArticleState, requestAllCategorizedArticles } from '../../redux/actions/article_actions';
import { selectAllArticles } from '../../redux/reducers/selectors';
import CategorizedArticleIndex from '../Presentational/categorized_article_index';


const mapStateToProps = (state, ownProps) => {
  let categorizedArticles;

  if (ownProps.published) {
    categorizedArticles = selectAllArticles(state).filter((article) => article.published).reverse();
  } else {
    categorizedArticles = selectAllArticles(state).filter((article) => !article.published);
  }

  return {
    categorizedArticles
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestAllCategorizedArticles: (category_id) => dispatch(requestAllCategorizedArticles(category_id)),
    clearArticleState: () => dispatch(clearArticleState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategorizedArticleIndex));
