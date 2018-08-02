import React from 'react';
import { connect } from 'react-redux';
import DeleteCategoryModal from './delete_category_modal';

const MODAL_COMPONENTS = {
  'DELETE_CATEGORY': DeleteCategoryModal
};

const ModalRoot = ({ modalProps, modalType }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];

  return <SpecificModal {...modalProps} />;
};

export default connect(state => state.modal)(ModalRoot);
