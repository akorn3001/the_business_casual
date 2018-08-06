import ArticleForm from './article_form';
import { connect } from 'react-redux';
import { withRotuer } from 'react-router-dom';

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
