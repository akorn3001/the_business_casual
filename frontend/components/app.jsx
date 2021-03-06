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
import HomePageContainer from './Container/home_page_container';
import CategorizedArticleIndexContainer from './Container/categorized_article_index_container';
import { AuthRoute, AdminRoute } from '../redux/util/route_util';
import Searchbar from './Presentational/searchbar';
import UnpublishedArticlesIndexContainer from './Container/unpublished_articles_index_container';
import ArticleEditContainer from './Container/article_edit_container';
import TestContainer from './Container/test_container';
import SearchIndexContainer from './Container/search_index_container';

class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <HeaderContainer />

        <div id="all-but-header">
          <ModalRoot />

          <Switch>
            <Route path={`/categories/:categoryID/articles`} exact component={CategorizedArticleIndexContainer} />
            <Route path="/articles" exact component={HomePageContainer} />
            <Route path="/articles/:articleID/" exact component={ArticleShowContainer} />
            <Route path="/search-index" exact component={SearchIndexContainer} />
            <Route path="/" exact component={HomePageContainer} />
          </Switch>

          <AuthRoute path="/login" exact component={SessionFormContainer} />
          <AuthRoute path="/signup" exact component={SessionFormContainer} />
          <AdminRoute path="/profile" component={AdminDashboardContainer} />
          <AdminRoute path="/unpublished" component={UnpublishedArticlesIndexContainer} />
          <AdminRoute path={`/edit-article/:articleID`} exact component={ArticleEditContainer} />
        </div>

      </div>
    );
  }
}

export default App;
