import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Header from './header/header';
import ModalRoot from './Modal/modal_root';
import CategoryIndexContainer from './Categories/CategoryIndex/category_index_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
      <div>
        <ModalRoot />
        <Header />
        <CategoryIndexContainer />
      </div>

  );
};

export default App;
