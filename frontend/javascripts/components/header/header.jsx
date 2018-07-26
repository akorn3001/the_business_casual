import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navigation;
    let categoryList;

    // TOP LEVEL NAVIGATION LINKS
    const aboutLink = <Link to="/about">About</Link>;
    const dashboardLink = <Link to="/profile">My Dashboard</Link>;
    const signUpLink = <Link to="/signup">Sign Up</Link>;
    const signInLink = <Link to="/login">Sign In</Link>;
    const signOutLink = <Link to="/login">Sign Out</Link>;

    // CATEGORY LINKS
    const category1Link = <Link to="/category1">Category-1</Link>;
    const category2Link = <Link to="/category2">Category-2</Link>;
    const category3Link = <Link to="/category3">Category-3</Link>;
    const category4Link = <Link to="/category4">Category-4</Link>;
    const category5Link = <Link to="/category5">Category-5</Link>;

    categoryList =
    <ul className="header-categories">
      <li className="header-category">{category1Link}</li>
      <li className="header-category">{category2Link}</li>
      <li className="header-category">{category3Link}</li>
      <li className="header-category">{category4Link}</li>
      <li className="header-category">{category5Link}</li>
    </ul>;


    if (this.props.currentUser) {
      navigation =
        <ul className="header-items">
          <li className="header-link">{aboutLink}</li>
          <li className="header-list">{headerCategories}</li>
          <li className="header-link">{dashboardLink}</li>
          <li className="header-link">{signOutLink}</li>
        </ul>;
      } else {
          navigation =
          <ul className="header-items">
            <li className="header-link">{aboutLink}</li>
            <li className="header-list">{categoryList}</li>
            <li className="header-link">{dashboardLink}</li>
            <li className="header-link">{signInLink}</li>
            <li className="header-link">{signUpLink}</li>
          </ul>;
        }

    return (
      <header>
        {navigation}
      </header>
    );
  }
}

export default Header;
