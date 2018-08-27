import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/users_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const LOG_OUT = "LOG_OUT";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const receiveSignUpErrors = (errors) => {
  return {
    type: RECEIVE_SIGNUP_ERRORS,
    errors
  };
};

export const resetState = () => {
  return {
    type: LOG_OUT
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
    errors: []
  };
};

export const signUp = (user) => (dispatch) => {
  return SessionAPIUtil.signUp(user)
  .then(user => {
    dispatch(receiveCurrentUser(user));
    return user;
  },
  errors => {
    dispatch(receiveSignUpErrors(errors.responseJSON));
    return errors;
  });
};

export const login = (user) => (dispatch) => {
  return SessionAPIUtil.login(user)
  .then(user => {
    dispatch(receiveCurrentUser(user));
    return user;
  },
  errors => {
    dispatch(receiveSessionErrors(errors.responseJSON));
    return errors;
  });
};

export const logout = () => (dispatch) => {
  return SessionAPIUtil.logout().then(response => {
    dispatch(resetState());
    dispatch(receiveCurrentUser(null));
    return response;
  });
};

export const requestCurrentUser = (user_id) => (dispatch) => {
  return UserAPIUtil.fetchSingleUser(user_id).then(user => {
    dispatch(receiveCurrentUser(user));
    return user;
  });
};

export const updateSingleUser = (user) => (dispatch) => {
  return UserAPIUtil.updateSingleUser(user).then(updatedUser => {
    dispatch(receiveCurrentUser(updatedUser));
    return user;
  });
};
