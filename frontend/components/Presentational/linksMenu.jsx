import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class LinksMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkColor : "black",
      backgroundColor : "#FFF200"
    };
  }

  render() {

    const impactLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ background: this.state.backgroundColor, color: this.state.linkColor }}
      to="/categories/82/articles">Impact
    </NavLink>;

    const innovationLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ background: this.state.backgroundColor, color: this.state.linkColor }}
      to="/categories/83/articles">Innovation
    </NavLink>;

    const marketing101Link =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ background: this.state.backgroundColor, color: this.state.linkColor }}
      to="/categories/84/articles">Marketing 101
    </NavLink>;

    const workLifeBalanceLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ background: this.state.backgroundColor, color: this.state.linkColor }}
      to="/categories/85/articles">Work Life Balance
    </NavLink>;

    const jobBoardLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ background: this.state.backgroundColor, color: this.state.linkColor }}
      to="/categories/86/articles">Job Board
    </NavLink>;

    const networkingSpaceLink =
    <NavLink className="menuitems"
      activeClassName="active-link"
      activeStyle={{ background: this.state.backgroundColor, color: this.state.linkColor }}
      to="/categories/87/articles">Networking Space
    </NavLink>;

    return (
      <ul onClick={this.props.closeNav} className="category-links-list">
        <li className="category-link">{impactLink}</li>
        <li className="category-link">{innovationLink}</li>
        <li className="category-link">{marketing101Link}</li>
        <li className="category-link">{workLifeBalanceLink}</li>
        <li className="category-link">{jobBoardLink}</li>
        <li className="category-link">{networkingSpaceLink}</li>
      </ul>
    );
  }
}

export default withRouter(LinksMenu);
