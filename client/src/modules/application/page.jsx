import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitExperience } from './actions';

import Nav from '../global/Nav';
import AView from './components/AView';
import BView from './components/BView';

const job = {
  title: 'HVAC Tech',
  description: 'We are looking for reliable, professional, motivated and hard working people. Candidates must be looking for a career with a stable HVACR company. We are a family oriented business providing HVAC and Refrigeration services since 1975. We install and service all types of heating, refrigeration and air conditioning equipment.',
  qualifications: ['Motivated individual', 'Must be well groomed and have a neat appearance', 'Friendly and personable', 'Valid drivers license & a clean driving record', 'Must agree to a background check and drug test', 'If an apprentice must be enrolled in school to forward your career'],
  benefits: ['Competitive wages', 'Paid vacations and 9 holidays', 'Medical, dental benefits', 'Short Term/Long Term Disability and others available', '401(k) Plan with available company match', 'Great working environment'],
  key_experience: ['HVAC', 'Mechanical', 'Overall years of work experience'],
  relevant_experience: ['Overall work experience', 'HVAC', 'Refrigeration', 'Mechanical']
};

class Application extends Component {
  constructor() {
    super();
    const application_view = localStorage.getItem('application_view');
    const view = application_view !== null ? (Math.random < 0.5 ? 'A' : 'B') : application_view;
    localStorage.setItem('application_view', view);
    this.state = {
      view: view,
      complete: false }
  }

  submitExperience = async (experience) => {
    experience.view = this.state.view;
    await this.props.submitExperience(experience);
    this.setState({
      complete: true
    })
  }

  renderJobInfo = () => {
    return (
      <div>
        <div className="row job-info">
          <div className="col s12">
            <h1>{job.title}</h1>
            <h2>Description</h2>
            <p>{job.description}</p>
            <p>Please fill out the information below and we will be in touch with you. Thank you! </p>
          </div>
        </div>
        {this.state.view === 'A' ? <AView onSubmit={this.submitExperience} /> : <BView onSubmit={this.submitExperience} />}
      </div>
    );
  }

  renderComplete = () => {
    return (
      <div className="row complete">
        <h1>Thank you for your interest in this position. We will get back to you shortly!</h1>
        <button>Sign out</button>
      </div>
    )
  }

  render() {
    return <div className="application">
      <Nav />
      <div className="row splash-img">
      </div>
      {this.state.complete ? this.renderComplete() : this.renderJobInfo()}
    </div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitExperience }, dispatch);
}

export default connect(null, mapDispatchToProps)(Application);