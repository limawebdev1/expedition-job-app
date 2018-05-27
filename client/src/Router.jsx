import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import Home from './modules/home/page.jsx';

const RouterComponent = () => {
  return (<Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>);
};

export default RouterComponent;