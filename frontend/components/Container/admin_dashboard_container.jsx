import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectAllArticles } from '../../redux/reducers/selectors';
import AdminDashboard from '../Presentational/admin_dashboard';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    unpublishedArticles: selectAllArticles(state).filter((article) => !article.published),
    publishedArticles: selectAllArticles(state).filter((article) => article.published)
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     requestAllArticles: () => dispatch(requestAllArticles()),
//
//   };
// };

export default connect(mapStateToProps, null)(AdminDashboard);
