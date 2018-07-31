// import { deleteCategory, hideModal } from '../../redux/modal_actions'
//
// const DeleteCategoryModal = ({ category, dispatch }) => (
//   <div>
//     <p>Delete Category {category.name}?</p>
//     <button onClick={() => {
//       dispatch(deleteCategory(category.id)).then(() => {
//         dispatch(hideModal())
//       })
//     }}>
//       Yes
//     </button>
//     <button onClick={() => dispatch(hideModal())}>
//       Nope
//     </button>
//   </div>
// )
//
// export default connect(
//   (state, ownProps) => ({
//     category: state.categoriesById[ownProps.categoryId]
//   })
// )(DeleteCategoryModal)

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestDeleteCategory } from '../../redux/actions/category_actions';
import { hideModal } from '../../redux/actions/modal_actions';
import { selectAllCategories } from '../../redux/reducers/selectors';

class DeleteCategoryModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm(e) {
    e.preventDefault();
    const { category, requestDeleteCategory, hideModal } = this.props;
    requestDeleteCategory(category.id).then(() => {
      hideModal();
    });
  }

  render() {
    return (
      <div className="modal-wrapper">
        <div className="delete-modal">
          <span>Are you sure?</span>
          <div className="modal-buttons">
            <button className="modal-button" onClick={this.handleConfirm}>Yes</button>
            <button className="modal-button" onClick={this.props.hideModal}>No</button>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     categories: selectAllCategories(state)
//   };
// };

const mapDispatchToProps = dispatch => {
  return  {
    requestDeleteCategory: (category_id) => dispatch(requestDeleteCategory(category_id)),
    hideModal: () => dispatch(hideModal())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(DeleteCategoryModal));
