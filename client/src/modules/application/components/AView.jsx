import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { requiredFields } from '../../../utils/validation';
import TextInput from '../../global/TextInput';

const validate = values => {
  const errors = requiredFields(values, ['yrs_total', 'yrs_hvac', 'yrs_mechanical', 'yrs_refrigeration']);
  const { yrs_total, yrs_hvac, yrs_mechanical, yrs_refrigeration } = values;
  const onlyNumbers = new RegExp('^[0-9]+$');
  if (!onlyNumbers.test(yrs_total)) {
    errors.yrs_total = '- Must be a number';
  }
  if (!onlyNumbers.test(yrs_hvac)) {
    errors.yrs_hvac = '- Must be a number';
  }
  if (!onlyNumbers.test(yrs_mechanical)) {
    errors.yrs_mechanical = '- Must be a number';
  }
  if (!onlyNumbers.test(yrs_refrigeration)) {
    errors.yrs_refrigeration = '- Must be a number';
  }
  return errors;
};

class AView extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row a-view">
        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)} className="white-text">
          <Field name="yrs_total" type="number" className="col s12 m6 l3" component={TextInput} labelText="Overall years of work experience" labelClass="active" />
          <Field name="yrs_hvac" type="number" className="col s12 m6 l3" component={TextInput} labelText="Years of HVAC experience" labelClass="active" />
          <Field name="yrs_mechanical" type="number" className="col s12 m6 l3" component={TextInput} labelText="Years of mechanical experience" labelClass="active" />
          <Field name="yrs_refrigeration" type="number" className="col s12 m6 l3" component={TextInput} labelText="Years of refrigeration experience" labelClass="active" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'experience', validate })(AView);