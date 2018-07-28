import {
  RECEIVE_ARTICLE_ERRORS
} from '../actions/article_actions';

const articleErrorsReducer = (state = { errors: [] }, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTICLE_ERRORS:
      newState = Object.assign({}, state, {errors: action.errors});
      return newState;
    // case CLEAR_ERRORS:
    //   newState = { errors: [] };
    //   return newState;
    default:
      return state;
  }
};

export default articleErrorsReducer;
