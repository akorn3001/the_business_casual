import { connect } from 'react-redux';
import { selectSearchResults } from '../../redux/reducers/selectors';
import SearchIndex from '../Presentational/search_index';

const mapStateToProps = state => {
  return {
    searchResults: state => selectSearchResults(state)
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//
//   };
// };

export default connect(mapStateToProps, null)(SearchIndex);
