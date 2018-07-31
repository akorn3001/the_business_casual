import React from 'react';
import DeleteCategoryModal from '../../Modal/delete_category_modal';

class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
  }

  // handleDeleteCategory(e) {
  //   e.preventDefault();
  //   const { category, requestDeleteCategory } = this.props;
  //   requestDeleteCategory(category.id);
  // }

  handleDeleteCategory(e) {
    e.preventDefault();
    const { category, showDeleteCategoryModal } = this.props;
    showDeleteCategoryModal(category.id);
  }

  render() {
    const { category } = this.props;

    return (
      <div className="category-index-item-container">
        <div className="category-index-item">
          { category.name }
          <span className="delete-category" onClick={this.handleDeleteCategory}>×</span>
          <DeleteCategoryModal category={category}/>
        </div>
      </div>
    );
  }
}

export default CategoryIndexItem;
