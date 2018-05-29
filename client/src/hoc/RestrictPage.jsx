import React, { Component } from 'react';
import { browserHistory } from 'react-router-dom';
import { getAuthToken } from '../utils/auth';

export default (WrappedComponent, redirect = '/') => {
  return class RestrictPage extends Component {

    authorized = () => getAuthToken();

    componentWillMount() {
      if (!this.authorized()) {
        this.props.history.push(redirect);
      }
    }

    render() {
      return this.authorized() ? <WrappedComponent {...this.props} /> : null;
    }
  };
};