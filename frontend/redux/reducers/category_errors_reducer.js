import {
  RECEIVE_CATEGORY_ERRORS
} from '../actions/category_actions';

const categoryErrorsReducer = (state = { errors: [] }, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CATEGORY_ERRORS:
      newState = Object.assign({}, state, {errors: action.errors});
      return newState;
    // case CLEAR_ERRORS:
    //   newState = { errors: [] };
    //   return newState;
    default:
      return state;
  }
};

export default categoryErrorsReducer;
