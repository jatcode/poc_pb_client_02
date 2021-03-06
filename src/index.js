import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';

import {Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='/recipes/add' component={AddRecipe}></Route>
      </Route>
    </Router>
  </Provider>
)


ReactDOM.render(
  router,
  document.getElementById('root')
);
