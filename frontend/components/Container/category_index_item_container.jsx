import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestDeleteCategory } from '../../redux/actions/category_actions';
import { showDeleteCategoryModal } from '../../redux/actions/modal_actions';
import CategoryIndexItem from '../Presentational/category_index_item';

const mapStateToProps = state => {
  return {
    // currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestDeleteCategory: (category_id) => dispatch(requestDeleteCategory(category_id)),
    showDeleteCategoryModal: (category_id) => dispatch(showDeleteCategoryModal(category_id))

  };
};


export default withRouter(connect(null, mapDispatchToProps)(CategoryIndexItem));
