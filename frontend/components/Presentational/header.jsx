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
    let topLevelNav;
    let categories;

    // CATEGORY LINKS: Impact :: Innovation :: Marketing 101 :: Work/Life Balance :: Job Board :: Networking Space
    const impact = <Link to="/articles/impact">Impact</Link>;
    const innovation = <Link to="/articles/innovation">Innovation</Link>;
    const marketing101 = <Link to="/articles/marketing101">Marketing 101</Link>;
    const workLifeBalance = <Link to="/articles/work-life-balance">Work/Life Balance</Link>;
    const jobBoard = <Link to="/articles/job-board">Job Board</Link>;
    const networkingSpace = <Link to="/articles/networking-space">Networking Space</Link>;

    categories =
    <ul className="category-links-list">
      <li className="category-link">{impact}</li>
      <li className="category-link">{innovation}</li>
      <li className="category-link">{marketing101}</li>
      <li className="category-link">{workLifeBalance}</li>
      <li className="category-link">{jobBoard}</li>
      <li className="category-link">{networkingSpace}</li>
    </ul>;

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
        <header>
          { topLevelNav }

          <div className="synergize-logo-wrapper">
            <Link to="/articles"><img className="synergize-logo" src={window.staticImages.synergizeLogo} /></Link>
          </div>

          { categories }
        </header>
      );
    }
  }

export default Header;
