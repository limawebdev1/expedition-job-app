import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Slider from 'material-ui/Slider';
// import { requiredFields } from '../../../utils/validation';
import TextInput from '../../global/TextInput';

class BView extends Component {
  constructor() {
    super();
    this.state = {
      yrs_total: 0,
      yrs_hvac: 0,
      yrs_mechanical: 0,
      yrs_refrigeration: 0,
    }
  }

  handleYrsTotalChange = (event, value) => {
    this.setState({
      yrs_total: value
    });
  }

  handleYrsHvacChange = (event, value) => {
    this.setState({
      yrs_hvac: value
    });
  }

  handleYrsMechanicalChange = (event, value) => {
    this.setState({
      yrs_mechanical: value
    });
  }

  handleYrsRefrigerationChange = (event, value) => {
    this.setState({
      yrs_refrigeration: value
    });
  }

  submitExperience = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row b-view">
        <div className="col s12 m6 l3">
          <p>Overall years of work experience: <span>{this.state.yrs_total}</span></p>
          <Slider
            min={0}
            max={50}
            step={1}
            value={Number(this.state.yrs_total)}
            onChange={this.handleYrsTotalChange}
          />
        </div>
        <div className="col s12 m6 l3">
          <p>Years of HVAC experience: <span>{this.state.yrs_hvac}</span></p>
          <Slider
            min={0}
            max={50}
            step={1}
            value={Number(this.state.yrs_hvac)}
            onChange={this.handleYrsHvacChange}
          />
        </div>
        <div className="col s12 m6 l3">
          <p>Years of mechanical experience: <span>{this.state.yrs_mechanical}</span></p>
          <Slider
            min={0}
            max={50}
            step={1}
            value={Number(this.state.yrs_mechanical)}
            onChange={this.handleYrsMechanicalChange}
          />
        </div>
        <div className="col s12 m6 l3">
          <p>Years of refrigeration experience: <span>{this.state.yrs_refrigeration}</span></p>
          <Slider
            min={0}
            max={50}
            step={1}
            value={Number(this.state.yrs_refrigeration)}
            onChange={this.handleYrsRefrigerationChange}
          />
        </div>
        <div className="col s12">
          <button onClick={this.submitExperience}>Submit</button>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: 'experience' })(BView);