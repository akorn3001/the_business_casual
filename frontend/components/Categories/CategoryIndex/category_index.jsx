import React from 'react';
// import CategoryIndexItemContainer from '../CategoryIndexItem/category_index_item_container';
import CategoryIndexItem from '../CategoryIndexItem/category_index_item';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        { categories.map(category => <CategoryIndexItem key={category.id} category={category} />) }
      </div>
    );
  }
}

export default CategoryIndex;
