import React from 'react';

class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
  }

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
        </div>
      </div>
    );
  }
}

export default CategoryIndexItem;
