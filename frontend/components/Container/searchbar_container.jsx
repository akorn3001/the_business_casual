
import { connect } from 'react-redux';
import { requestSearchedResults } from '../../redux/actions/search_actions';
import Searchbar from '../Presentational/searchbar';

// const mapStateToProps = state => {
//   return {
//     results: getAllResults(state)
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    requestSearchedResults: search => dispatch(requestSearchedResults(search))
  };
};

export default connect(null, mapDispatchToProps)(Searchbar);
