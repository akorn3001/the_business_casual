import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import signUpErrorsReducer from './signup_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  signUp: signUpErrorsReducer,
});

export default errorsReducer;
