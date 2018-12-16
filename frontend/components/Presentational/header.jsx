import React from 'react';
import { Link } from 'react-router-dom';
import SearchbarContainer from '../Container/searchbar_container';
import Dropdown from './dropdown.jsx';

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
    let topLevelNav;

    // TOP LEVEL NAVIGATION LINKS
    const dashboardLink = <Link to="/profile">Admin Dashboard</Link>;
    const signInLink = <Link to="/login" className="auth-link">Sign In</Link>;
    const signOutButton = <button className="auth-link" onClick={this.handleLogout}>Sign Out</button>;

    if (currentUser) {
      if (currentUser.admin) {
          topLevelNav =
          <div className="top-level-nav">
            <ul>
              <li className="top-level-nav-item">{dashboardLink}</li>
              <li className="top-level-nav-item">{signOutButton}</li>
            </ul>
          </div>;
        } else {
          topLevelNav =
          <div className="top-level-nav">
            <ul>
              <li className="top-level-nav-item">{signOutLink}</li>
            </ul>
          </div>;
        }
      } else {
        topLevelNav =
        <div className="top-level-nav">
          <ul>
            <li className="top-level-nav-item">{signInLink}</li>
          </ul>
        </div>;
      }

      return (
        <div>
          <header>
            <div className="synergize-logo-wrapper">
              <Link to="/articles"><img className="synergize-logo" src={window.staticImages.synergizeLogo} /></Link>
            </div>
            <Dropdown />
            { topLevelNav }
          </header>
        </div>

      );
    }
  }

export default Header;
