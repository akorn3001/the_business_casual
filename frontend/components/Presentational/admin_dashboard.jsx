import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexContainer from '../Container/category_index_container';
import ArticleIndexContainer from '../Container/article_index_container';
import ArticleFormContainer from '../Container/article_form_container';

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
    //     <ArticleIndexContainer published={true} />
    //   </div>
    //
    //   <div className="admin-dash-unpublished-articles">
    //     <ArticleIndexContainer published={false} />
    //   </div>
    // </div>
    <div className="admin-dash">
      <div className="admin-dash-left-panel">
        CONTENT COMING...
      </div>
    </div>
  );
}

}

export default AdminDashboard;
