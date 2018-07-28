import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import signUpErrorsReducer from './signup_errors_reducer';
import articleErrorsReducer from './article_errors_reducer';
import categoryErrorsReducer from './category_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  signUp: signUpErrorsReducer,
  categories: categoryErrorsReducer,
  articles: articleErrorsReducer
});

export default errorsReducer;
