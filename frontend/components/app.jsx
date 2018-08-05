import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Header from './header/header';
import ModalRoot from './Modal/modal_root';
import CategoryIndexContainer from './Categories/CategoryIndex/category_index_container';
import ArticleIndexContainer from './Articles/ArticleIndex/article_index_container';
import ArticleShowContainer from './Articles/ArticleShow/article_show_container';
import ArticleForm from './Articles/ArticleForm/article_form';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <Header />
      <ModalRoot />

      <Switch>
        <Route path={`/articles/:articleID`} exact component={ArticleShowContainer} />
        <Route path="/articles" component={ArticleIndexContainer} />
      </Switch>

      <ArticleForm />
      <CategoryIndexContainer />
    </div>
  );
};

export default App;
