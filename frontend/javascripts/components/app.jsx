import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Header from './header/header';
import TestContainer from './test';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
      <div>
        <Header />
        <TestContainer />
        Hello from App.jsx!
      </div>

  );
};

export default App;
