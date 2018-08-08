import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../redux/actions/session_actions';
import { withRouter } from 'react-router-dom';

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
