import React, { Component } from 'react';
import cx from 'classnames';

class NavButton extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.buttonToggle = this.buttonToggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.attr !== nextProps.attr) {
      this.buttonToggle();
    }
  }

  buttonToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const activeClass = cx({ active: this.state.isOpen });

    return (
      <span id="closebtn" onClick={this.props.navToggle}>
        <span className={["line1", activeClass].join(' ')}/>
        <span className={["line2", activeClass].join(' ')}/>
        <span className={["line3", activeClass].join(' ')}/>
      </span>
    );
  }
}

export default NavButton;
