import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import Home from './modules/home/page.jsx';
import Apply from './modules/apply/page.jsx';

const RouterComponent = () => {
  return (<Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/apply" component={Apply} />
    </Switch>
  </Router>);
};

export default RouterComponent;