import React from 'react';
import CategoryIndexItemContainer from '../Container/category_index_item_container';

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
        <h1>Categories</h1>
        { categories.map(category => <CategoryIndexItemContainer key={category.id} category={category} />) }

        <hr />

        <div className="category-index-create-category">
          <span><strong>Add Category</strong></span>
          <div className="create-category">
            <form className="create-category-form" onSubmit={this.handleSubmit}>
              <div>
                <input
                  className="create-category-form-input"
                  onChange={this.handleChange('newCategoryName')}
                  type="text"
                  value={this.state.newCategoryName}
                  placeholder="Enter Category Name"
                />
              </div>

              <br/>

              <button className="create-category-submit form-submit" type="submit">Create Category</button>
            </form>
          </div>
        </div>

      </div>
    );
  }
}


export default CategoryIndex;
