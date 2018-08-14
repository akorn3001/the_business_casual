import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexContainer from '../Container/category_index_container';
import ArticleIndexContainer from '../Container/article_index_container';
import ArticleFormContainer from '../Container/article_form_container';
import AdminSidebarContainer from '../Container/admin_sidebar_container';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
  return (
    // <div className="admin-dash">
    //   <div className="admin-dash-category-index">
    //     <CategoryIndexContainer />
    //   </div>
    //
    //   <div className="admin-dash-published-articles">
    //     <ArticleIndexContainer imageDisplay={false} published={true} />
    //   </div>
    //
    //   <div className="admin-dash-unpublished-articles">
    //     <ArticleIndexContainer imageDisplay={false} published={false} />
    //   </div>
    // </div>
    // <div className="admin-dash">
    //   <div className="admin-dash-sidebar">
    //     <AdminSidebarContainer />
    //   </div>
    //
    //   <div className="admin-dash-form">
    //     <ArticleFormContainer />
    //   </div>
    // </div>
    <div className="admin-dash-wrapper">
      <div className="admin-dash">
        <div id="admin-dash-left" className="admin-dash-column">
          <div className="admin-dash-bottom">
            <AdminSidebarContainer />
          </div>
        </div>

        <div id="admin-dash-right" className="admin-dash-column">
          <h1 className="welcome-banner">Welcome, {this.props.currentUser.username}!</h1>
          <div className="admin-dash-bottom">
            <ArticleFormContainer />
          </div>
        </div>
      </div>
    </div>


  );
}

}

export default AdminDashboard;
