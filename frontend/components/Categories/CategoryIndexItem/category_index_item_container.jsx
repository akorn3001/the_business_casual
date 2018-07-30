import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestDeleteCategory } from '../../../redux/actions/category_actions';
import CategoryIndexItem from './category_index_item';

const mapStateToProps = state => {
  return {
    // currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestDeleteCategory: (category_id) => dispatch(requestDeleteCategory(category_id))

  };
};


export default withRouter(connect(null, mapDispatchToProps)(CategoryIndexItem));
