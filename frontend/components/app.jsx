import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import HeaderContainer from './Container/header_container';
import ModalRoot from './Modal/modal_root';
import CategoryIndexContainer from './Container/category_index_container';
import ArticleIndexContainer from './Container/article_index_container';
import ArticleShowContainer from './Container/article_show_container';
import ArticleFormContainer from './Container/article_form_container';
import SessionFormContainer from './Container/session_form_container';
import AdminDashboardContainer from './Container/admin_dashboard_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <ModalRoot />
      <AdminDashboardContainer />
      <ArticleFormContainer />

      <Switch>
        <Route path={`/articles/:articleID`} exact component={ArticleShowContainer} />
        <Route path="/articles" component={ArticleIndexContainer} />
        <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />
    </Switch>
    </div>
  );
};

export default App;
