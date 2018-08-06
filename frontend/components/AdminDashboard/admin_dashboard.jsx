import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexContainer from '../Categories/CategoryIndex/category_index_container';
import ArticleFormContainer from '../Articles/ArticleForm/article_form_container';
import ArticleIndexContainer from '../Articles/ArticleIndex/article_index_container';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
  return (
    <div className="admin-dash">
      <div className="admin-dash-category-index">
        <CategoryIndexContainer />
      </div>

      <div className="admin-dash-published-articles">
        <ArticleIndexContainer published={true} />
      </div>

      <div className="admin-dash-unpublished-articles">
        <ArticleIndexContainer published={false} />
      </div>
    </div>
  );
}

}

export default AdminDashboard;
