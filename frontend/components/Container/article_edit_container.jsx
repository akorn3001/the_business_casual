import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestUpdateArticle, requestSingleArticle } from '../../redux/actions/article_actions';
import { selectAllArticles } from '../../redux/reducers/selectors';
import ArticleEdit from '../Presentational/article_edit';

const mapStateToProps = (state, ownProps) => {

  return {
    article: state.entities.articles[ownProps.match.params.articleID]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUpdateArticle: (article, article_id) => dispatch(requestUpdateArticle(article, article_id)),
    requestSingleArticle: (article_id) => dispatch(requestSingleArticle(article_id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleEdit));
