import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestAllCategories } from '../../../redux/actions/category_actions';
import { selectAllCategories } from '../../../redux/reducers/selectors';
import CategoryIndex from './category_index';


const mapStateToProps = state => {
  return {
    categories: selectAllCategories(state)
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestAllCategories: () => dispatch(requestAllCategories())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryIndex));
