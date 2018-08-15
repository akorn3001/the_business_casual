//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Root from './root';
import configureStore from '../redux/store/store';

import { logout, login, signUp } from '../redux/actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.logout = logout;
  window.login = login;
  window.signUp = signUp;

  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={ store } />, root);
});
