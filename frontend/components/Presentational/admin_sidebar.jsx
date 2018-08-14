import React from 'react';
import { Link } from 'react-router-dom';

class AdminSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="admin-sidebar">
        <div className="admin-sidebar-current-user">
          <div id="active-user-green-circle"></div>
          <span>{this.props.currentUser.username}</span>
        </div>
        <div className="sidebar-content">
          <Link to="/unpublished"><span>Review Unpublished Articles</span></Link>
        </div>
      </div>
    );
  }
}

export default AdminSidebar;
