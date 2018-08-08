import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestAllCategories, requestCreateCategory } from '../../redux/actions/category_actions';
import { selectAllCategories } from '../../redux/reducers/selectors';
import CategoryIndex from '../Presentational/category_index';


const mapStateToProps = state => {
  return {
    categories: selectAllCategories(state)
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestAllCategories: () => dispatch(requestAllCategories()),
    requestCreateCategory: (category) => dispatch(requestCreateCategory(category))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryIndex));
