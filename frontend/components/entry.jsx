//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Root from './root';
import configureStore from '../redux/store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  store = configureStore();
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={ store } />, root);
});
