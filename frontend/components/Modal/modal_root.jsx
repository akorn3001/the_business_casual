import React from 'react';
import { connect } from 'react-redux';
import DeleteCategoryModal from './delete_category_modal';
import DeleteArticleModal from './delete_article_modal';

const MODAL_COMPONENTS = {
  'DELETE_CATEGORY': DeleteCategoryModal,
  'DELETE_ARTICLE': DeleteArticleModal
};

const ModalRoot = ({ modalProps, modalType }) => {
  if (!modalType) {
    document.body.classList.remove('modal-open')
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  document.body.classList.add('modal-open')
  return <SpecificModal {...modalProps} />;
};

export default connect(state => state.modal)(ModalRoot);
