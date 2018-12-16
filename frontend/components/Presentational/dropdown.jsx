import React, { Component } from 'react';
import NavButton from './navButton';
import LinksMenu from './linksMenu';
import cx from 'classnames';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.navToggle = this.navToggle.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  navToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeNav() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const activeClass = cx({ active: this.state.isOpen });

    return (
      <div id="dropdown" className={["navigation", activeClass].join(' ')}>
        <NavButton attr={this.state.isOpen} navToggle={this.navToggle} />
        <LinksMenu closeNav={this.closeNav} />
      </div>
    );
  }
}

export default Dropdown;
