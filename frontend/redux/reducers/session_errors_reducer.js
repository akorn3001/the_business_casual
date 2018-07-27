import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (state = { errors: [] }, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      newState = Object.assign({}, state, {errors: action.errors});
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = { errors: [] };
      return newState;
    case CLEAR_ERRORS:
      newState = { errors: [] };
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
