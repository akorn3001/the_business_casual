import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import ModalRoot from './Modal/modal_root';
import CategoryIndexContainer from './Categories/CategoryIndex/category_index_container';
import ArticleIndexContainer from './Articles/ArticleIndex/article_index_container';
import ArticleShowContainer from './Articles/ArticleShow/article_show_container';
import ArticleForm from './Articles/ArticleForm/article_form';
import SessionFormContainer from './Session/session_form_container';
import AdminDashboardContainer from './AdminDashboard/admin_dashboard_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <ModalRoot />
      <AdminDashboardContainer />

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
