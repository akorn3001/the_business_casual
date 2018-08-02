import React from 'react';
import { connect } from 'react-redux';
import { requestDeleteCategory } from '../../redux/actions/category_actions';
import { hideModal } from '../../redux/actions/modal_actions';
import Modal from './modal';

const DeleteCategoryModal = (props) => {
  const { categoryID, requestDeleteCategory, hideModal } = props;

  return (
    <Modal
      dangerText={`Are you sure you want to delete this category?`}
      onDangerClick={() => requestDeleteCategory(categoryID).then(() => hideModal())}
      onSafetyClick={() => hideModal()}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    requestDeleteCategory: (category_id) => dispatch(requestDeleteCategory(category_id)),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(null, mapDispatchToProps)(DeleteCategoryModal);
