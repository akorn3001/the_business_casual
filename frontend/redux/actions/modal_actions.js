export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const showDeleteCategoryModal = (category) => {
  return {
    type: SHOW_MODAL,
    modalType: 'DELETE_CATEGORY',
    modalProps: {
      categoryID: category.id
    }
  };
};

export const hideDeleteCategoryModal = (category) => {
  return {
    type: HIDE_MODAL,
    modalType: 'DELETE_CATEGORY',
    modalProps: {
      categoryID: category.id
    }
  };
};

export const showDeleteArticleModal = (article) => {
  return {
    type: SHOW_MODAL,
    modalType: 'DELETE_ARTICLE',
    modalProps: {
      articleID: article.id
    }
  };
};

export const hideDeleteArticleModal = (article) => {
  return {
    type: HIDE_MODAL,
    modalType: 'DELETE_ARTICLE',
    modalProps: {
      articleID: article.id
    }
  };
};
