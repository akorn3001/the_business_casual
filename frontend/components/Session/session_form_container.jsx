import SessionForm from './session_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUp, login, deleteAllErrors } from '../../redux/actions/session_actions';
import { requestAllUsers } from '../../redux/actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.location.pathname === "/signup" ? "signup" : "login";

  return {
    loggedIn: Boolean(state.session.currentUser),
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname === "/signup" ? "signup" : "login";
  const action = formType === "signup" ? signUp : login;

  const processForm = (user) => {
    return dispatch(action(user));
  };


  return {
    processForm: user => processForm(user),
    deleteAllErrors: () => dispatch(deleteAllErrors()),
    requestAllUsers: () => dispatch(requestAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
