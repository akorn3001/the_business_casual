import React from 'react';
import CategoryIndexItemContainer from '../CategoryIndexItem/category_index_item_container';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newCategoryName: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.requestAllCategories();
  }

  handleSubmit(e) {
    e.preventDefault();
    // const newState = Object.assign({}, this.state);
    this.props.requestCreateCategory({ name: this.state.newCategoryName })
    .then(() => {
      this.setState({ newCategoryName: ""});
    });
  }

  handleChange(attribute) {
    return (e) => {
      e.preventDefault();
      this.setState({[attribute]: e.currentTarget.value});

      // if (this.props.errors.length) {
      //   this.props.clearErrors();
      // }
    };
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="category-index">
        <h3>ARTICLE CATEGORIES</h3>
        { categories.map(category => <CategoryIndexItemContainer key={category.id} category={category} />) }

        <hr />

        <span>Add Category</span>
        <div className="create-category">
          <form className="create-category-form" onSubmit={this.handleSubmit}>
            <input
              className="create-category-form-input"
              onChange={this.handleChange('newCategoryName')}
              type="text"
              value={this.state.newCategoryName}
              placeholder="Enter Category Name" />

              <br/>

              <button className="create-category-submit" type="submit">Create</button>
          </form>
        </div>
      </div>
    );
  }
}


export default CategoryIndex;
