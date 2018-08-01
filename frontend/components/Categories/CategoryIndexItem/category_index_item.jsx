import React from 'react';
import DeleteCategoryModal from '../../Modal/delete_category_modal';
import ModalRoot from '../../Modal/modal_root';

class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
  }

  handleDeleteCategory(e) {
    e.preventDefault();
    const { category, showDeleteCategoryModal } = this.props;
    showDeleteCategoryModal(category.id);
  }

  render() {
    const { category } = this.props;
    // const modal = <DeleteCategoryModal category={category} />;

    return (
      <div className="category-index-item-container">
        <div className="category-index-item">
          { category.name }
          <span className="delete-category" onClick={this.handleDeleteCategory}>×</span>
        </div>
      </div>
    );
  }
}

export default CategoryIndexItem;
