import React from 'react';
import { Link } from 'react-router-dom';
import SearchbarContainer from '../Container/searchbar_container';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      this.props.history.push("/login");
    });
  }

  render() {
    const { currentUser } = this.props;

    let navigation;

    // TOP LEVEL NAVIGATION LINKS
    const searchBar = <SearchbarContainer />;
    const signUpLink = <Link to="/signup" className="auth-link">Sign Up</Link>;
    const dashboardLink = <Link to="/profile">Admin Dashboard</Link>;
    const signInLink = <Link to="/login" className="auth-link">Sign In</Link>;
    const signOutButton = <button className="auth-link" onClick={this.handleLogout}>Sign Out</button>;

    // CATEGORY LINKS
    const category1Link = <Link to="/categories/1/articles">Category-1</Link>;
    const category2Link = <Link to="/category2">Category-2</Link>;
    const category3Link = <Link to="/category3">Category-3</Link>;
    const category4Link = <Link to="/category4">Category-4</Link>;

    if (currentUser) {
      if (currentUser.admin) {
        navigation =
          <ul className="header-items">
            <li className="header-search">{searchBar}</li>
            <li className="header-category">{category1Link}</li>
            <li className="header-category">{category2Link}</li>
            <li className="header-category">{category3Link}</li>
            <li className="header-category">{category4Link}</li>
            <li className="header-link">{dashboardLink}</li>
            <li className="header-link">{signOutButton}</li>
          </ul>;
        } else {
          navigation =
          <ul className="header-items">
            <li className="header-search">{searchBar}</li>
            <li className="header-category">{category1Link}</li>
            <li className="header-category">{category2Link}</li>
            <li className="header-category">{category3Link}</li>
            <li className="header-category">{category4Link}</li>
            <li className="header-link">{signOutButton}</li>
          </ul>;
        }
      } else {
        navigation =
        <ul className="header-items">
          <li className="header-search">{searchBar}</li>
          <li className="header-category">{category1Link}</li>
          <li className="header-category">{category2Link}</li>
          <li className="header-category">{category3Link}</li>
          <li className="header-category">{category4Link}</li>
          <li className="header-link">{signInLink}</li>
          <li className="header-link">{signUpLink}</li>
        </ul>;
      }


      return (
        <header>
          <Link to="/articles"><span>The Business Casual</span></Link>
          {navigation}
        </header>
      );
    }
  }

export default Header;
