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
    const dashboardLink = <Link to="/profile">Admin Dashboard</Link>;
    const signInLink = <Link to="/login" className="auth-link">Sign In</Link>;
    const signOutButton = <button className="auth-link" onClick={this.handleLogout}>Sign Out</button>;


    if (currentUser) {
      if (currentUser.admin) {
        navigation =
          <ul className="header-items">
            <li className="header-link">{dashboardLink}</li>
            <li className="header-link">{signOutButton}</li>
          </ul>;
        } else {
          navigation =
          <ul className="header-items">
            <li className="header-link">{signOutButton}</li>
          </ul>;
        }
      } else {
        navigation =
        <ul className="header-items">
          <li className="header-link">{signInLink}</li>
        </ul>;
      }


      return (
        <header>
          <div className="synergize-logo-wrapper">
            <Link to="/articles"><img className="synergize-logo" src={window.staticImages.synergizeLogo} /></Link>
          </div>
          {navigation}
        </header>
      );
    }
  }

export default Header;
