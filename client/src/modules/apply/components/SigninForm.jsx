import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SigninForm extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="col s12 valign">
        <h1 className="center-align">Start Your Expedition</h1>
        <p className="center-align">Enter your email and password to sign in.</p>
        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
          <div className="form-field">
            <label htmlFor="email" >Email</label>
            <Field name="email" required component="input" type="email" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <Field name="password" required component="input" type="password" />
          </div>
          <button className="center-align" type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signin'
})(SigninForm);