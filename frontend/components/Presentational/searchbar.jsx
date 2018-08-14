import React from 'react';
import { isEmpty } from 'lodash';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSearch(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    //
    // this.props.processForm(user);
    alert(`You typed: ${this.state.query}`);
    this.setState({ query: "" });
  }

  render() {
    return (
      <div className="searchbar-wrapper">
        <div className="searchbar">
          <img src={window.staticImages.magnifyingGlass} />
          <form onSubmit={this.handleSearch}>
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={this.state.query}
              onChange={this.handleChange("query")}
              />
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbar;
