import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { requiredFields } from '../../../utils/validation';
import TextInput from '../../global/TextInput';

// Form validation requirements
const validate = values => {
  const errors = requiredFields(values, ['first_name', 'last_name', 'email', 'password', 'passwordConfirm']);
  const { first_name, last_name, password, passwordConfirm } = values;
  if (password && passwordConfirm && password !== passwordConfirm) {
    errors.passwordConfirm = '- Passwords Must Match';
  }
  const onlyLetters = new RegExp('^[A-Za-z ]+$');
  if (!onlyLetters.test(first_name)) {
    errors.first_name = '- Letters only';
  }
  if (!onlyLetters.test(last_name)) {
    errors.last_name = '- Letters only';
  }
  if (password && password.length < 8) {
    errors.password = '- Must contain at least 8 characters';
  }
  return errors;
};

class SignUpForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col s12 valign signup">
        <h1 className="center-align">Start Your Expedition</h1>
        <p className="center-align">Sign up to start applying to jobs.</p>
        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)} className="white-text">
          <Field name="first_name" className="name" component={TextInput} labelText="First Name" labelClass="active" />
          <Field name="last_name" className="name" component={TextInput} labelText="Last Name" labelClass="active" />
          <Field name="email" type="email" component={TextInput} labelText="Email" labelClass="active" />
          <Field name="password" type="password" component={TextInput} labelText="Password" labelClass="active" />
          <Field name="passwordConfirm" type="password" component={TextInput} labelText="Confirm Password" labelClass="active" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'signup', validate })(SignUpForm);