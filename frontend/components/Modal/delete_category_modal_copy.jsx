// import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { requestDeleteCategory } from '../../redux/actions/category_actions';
// import { hideModal } from '../../redux/actions/modal_actions';
// import { selectAllCategories } from '../../redux/reducers/selectors';
//
// class DeleteCategoryModal extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.handleConfirm = this.handleConfirm.bind(this);
//   }
//
//   handleConfirm(e) {
//     e.preventDefault();
//     const { categoryID, requestDeleteCategory, hideModal } = this.props;
//     requestDeleteCategory(categoryID).then(() => {
//       hideModal();
//     });
//   }
//
//   render() {
//     return (
//       <div className="modal-wrapper">
//         <div className="modal">
//           <span>Are you sure?</span>
//           <div className="modal-buttons">
//             <button className="modal-btn danger-button" onClick={this.handleConfirm}>Yes</button>
//             <button className="modal-btn safety-button" onClick={this.props.hideModal}>No</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = state => {
//   return {
//     categories: state.entities.categories
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return  {
//     requestDeleteCategory: (category_id) => dispatch(requestDeleteCategory(category_id)),
//     hideModal: () => dispatch(hideModal())
//   };
// };
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteCategoryModal));
