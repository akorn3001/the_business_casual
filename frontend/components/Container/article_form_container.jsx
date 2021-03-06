import { connect } from 'react-redux';
import { withRotuer } from 'react-router-dom';
import { requestCreateArticle } from '../../redux/actions/article_actions';
import ArticleForm from '../Presentational/article_form';

// const mapStateToProps = (state) => {
//   return {
//
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    requestCreateArticle: (article) => dispatch(requestCreateArticle(article))
  };
};

export default connect(null, mapDispatchToProps)(ArticleForm);
