import * as CategoryAPIUtil from '../util/categories_api_util';

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';
export const RECEIVE_SINGLE_CATEGORY = 'RECEIVE_SINGLE_CATEGORY';
export const REMOVE_SINGLE_CATEGORY = 'REMOVE_SINGLE_CATEGORY';
// export const CREATE_CATEGORY = 'CREATE_CATEGORY';
// export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// Actions dispatched by the store to the reducer
export const receiveAllCategories = (categories) => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    categories
  };
};

export const receiveSingleCategory = (category) => {
  return {
    type: RECEIVE_SINGLE_CATEGORY,
    category
  };
};

// export const createSingleCategory = (category) => {
//   return {
//     type: CREATE_CATEGORY,
//     category
//   };
// };

export const removeSingleCategory = (category) => {
  return {
    type: REMOVE_SINGLE_CATEGORY,
    category
  };
};

// export const updateCategory = (category) => {
//   return {
//     type: UPDATE_CATEGORY,
//     category
//   };
// };

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

// Asynchronous functions to be called in our React components
export const requestAllCategories = () => (dispatch) => {
  return CategoryAPIUtil.fetchAllCategories()
  .then(categories => {
    dispatch(receiveAllCategories(categories));
  });
};

export const requestSingleCategory = (category_id) => (dispatch) => {
  return CategoryAPIUtil.fetchSingleCategory(category_id)
  .then(category => {
    dispatch(receiveSingleCategory(category));
  });
};

export const requestAllArticleizedCategories = (article_id) => {
  return CategoryAPIUtil.fetchArticleizedCategories(article_id)
  .then(articleizedCategories => {
    dispatch(receiveAllCategories(articleizedCategories));
  });
};

export const requestUpdateCategory = (category) => (dispatch) => (
  CategoryAPIUtil.updateCategory(category)
  .then(updatedCategory => {
    dispatch(receiveSingleCategory(updatedCategory));
    return updatedCategory;
  }).fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestCreateCategory = (category) => (dispatch) => (
  CategoryAPIUtil.createCategory(category)
  .then(createdCategory => {
    dispatch(receiveSingleCategory(createdCategory));
    return createdCategory;
  }).fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestRemoveCategory = (category) => (dispatch) => {
  return CategoryAPIUtil.destroyCategory(category).then(() => dispatch(removeSingleCategory()));
};
