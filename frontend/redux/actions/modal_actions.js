export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const showDeleteCategoryModal = (category_id) => {
  return {
    type: SHOW_MODAL,
    modalType: 'DELETE_CATEGORY',
    modalProps: {
      categoryID: category_id
    }
  };
};

export const showUpdateArticleModal = (article_id) => {
  return {
    type: SHOW_MODAL,
    modalType: 'UPDATE_ARTICLE',
    modalProps: {
      articleID: article_id
    }
  };
};

export const showDeleteArticleModal = (article_id) => {
  return {
    type: SHOW_MODAL,
    modalType: 'DELETE_ARTICLE',
    modalProps: {
      articleID: article_id
    }
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  };
};
