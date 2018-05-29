import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// import { requiredFields } from '../../../utils/validation';
import TextInput from '../../global/TextInput';

class BView extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row b-view">
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

export default reduxForm({ form: 'experience' })(BView);