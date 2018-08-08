import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestDeleteArticle, requestSingleArticle } from '../../redux/actions/article_actions';
import { showDeleteArticleModal } from '../../redux/actions/modal_actions';
import { selectAllArticles } from '../../redux/reducers/selectors';
import ArticleShow from '../Presentational/article_show';


const mapStateToProps = (state, ownProps) => {
  const article = state.entities.articles[ownProps.match.params.articleID];

  return {
    article
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestDeleteArticle: (article_id) => dispatch(requestDeleteArticle(article_id)),
    showDeleteArticleModal: (article_id) => dispatch(showDeleteArticleModal(article_id)),
    requestSingleArticle: (article_id) => dispatch(requestSingleArticle(article_id))

  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleShow));
