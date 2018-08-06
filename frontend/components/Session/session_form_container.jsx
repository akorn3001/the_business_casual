import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp, login, deleteAllErrors } from '../../redux/actions/session_actions';
import { requestAllUsers } from '../../redux/actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const formType =
    ownProps.location.pathname === "/signup" ? "signup" : "login";
  const errors =
    ownProps.location.pathname === "/signup" ? state.errors.signUp.errors : state.errors.session.errors;

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: errors,
    formType: formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType =
    ownProps.location.pathname === "/signup" ? "signup" : "login";
  const action = formType === "signup" ? signUp : login;

  const processForm = user => {
    return dispatch(action(user));
  };


  return {
    processForm: user => processForm(user),
    deleteAllErrors: () => dispatch(deleteAllErrors()),
    login: user => dispatch(login(user)),
    requestAllUsers: () => dispatch(requestAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
