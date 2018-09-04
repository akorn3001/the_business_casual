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
    // alert(`You typed: ${this.state.query}`);
    // this.setState({ query: "" });
    this.props.requestSearchedResults(this.state.query);
  }

  render() {
    return (
      <div className="searchbar-wrapper">
        <div className="searchbar">
          <form onSubmit={this.handleSearch}>
            <label>
              <img src={window.staticImages.magnifyingGlass} />
              <input
                id="query"
                name="query"
                className="search-input"
                type="text"
                placeholder="Search..."
                value={this.state.query}
                onChange={this.handleChange("query")}
                />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbar;
