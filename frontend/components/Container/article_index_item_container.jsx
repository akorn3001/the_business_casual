import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestDeleteArticle } from '../../redux/actions/article_actions';
import { showDeleteArticleModal } from '../../redux/actions/modal_actions';
import ArticleIndexItem from '../Presentational/article_index_item';

const mapStateToProps = (state, ownProps) => {
  return {
    // currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestDeleteArticle: (article_id) => dispatch(requestDeleteArticle(article_id)),
    showDeleteArticleModal: (article_id) => dispatch(showDeleteArticleModal(article_id))
  };
};


export default withRouter(connect(null, mapDispatchToProps)(ArticleIndexItem));
