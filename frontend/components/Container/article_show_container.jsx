import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestDeleteArticle, requestSingleArticle, requestAllArticles } from '../../redux/actions/article_actions';
import { showDeleteArticleModal } from '../../redux/actions/modal_actions';
import { selectAllArticles, selectAllArticleIDs } from '../../redux/reducers/selectors';
import ArticleShow from '../Presentational/article_show';


const mapStateToProps = (state, ownProps) => {
  const thisArticleID = Number(ownProps.match.params.articleID);
  const article = state.entities.articles[thisArticleID];

  return {
    article,
    articleIDs: selectAllArticleIDs(state)
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestDeleteArticle: (article_id) => dispatch(requestDeleteArticle(article_id)),
    showDeleteArticleModal: (article_id) => dispatch(showDeleteArticleModal(article_id)),
    requestSingleArticle: (article_id) => dispatch(requestSingleArticle(article_id)),
    requestAllArticles: () => dispatch(requestAllArticles())

  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleShow));
