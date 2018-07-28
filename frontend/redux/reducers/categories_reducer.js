import merge from 'lodash/merge';

import {
  RECEIVE_ALL_CATEGORIES,
  RECEIVE_SINGLE_CATEGORY,
  DELETE_SINGLE_CATEGORY,
  RECEIVE_ERRORS
} from '../actions/category_actions';

const categoriesReducer = (state = {}, action) => {
  let newState;
  let category;

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      newState = Object.assign({}, state, action.categories);
      return newState;
    case RECEIVE_SINGLE_CATEGORY:
      category = action.category;
      // return merge({}, state, { [category.id]: category });
      newState = Object.assign({}, state, {[category.id]: category});
      return newState;
    case DELETE_SINGLE_CATEGORY:
      category = action.category;
      newState = Object.assign({}, state);
      delete newState[category.id];
      return newState;
    default:
      return state;
  }
};

export default categoriesReducer;
