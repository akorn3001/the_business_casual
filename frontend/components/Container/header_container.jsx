import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../redux/actions/session_actions';
import Header from '../Presentational/header';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    logout: () => dispatch(logout())
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
