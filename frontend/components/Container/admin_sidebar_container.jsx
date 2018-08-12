import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AdminSidebar from '../Presentational/admin_sidebar';

// const mapStateToProps = state => {
//   return {
//
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//
//   };
// };

export default withRouter(connect(null, null)(AdminSidebar));
