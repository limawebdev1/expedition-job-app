import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../global/Nav';

const job = {
  title: 'HVAC Tech',
  description: 'We are looking for reliable, professional, motivated and hard working people. Candidates must be looking for a career with a stable HVACR company. We are a family oriented business providing HVAC and Refrigeration services since 1975. We install and service all types of heating, refrigeration and air conditioning equipment.',
  qualifications: ['Motivated individual', 'Must be well groomed and have a neat appearance', 'Friendly and personable', 'Valid drivers license & a clean driving record', 'Must agree to a background check and drug test', 'If an apprentice must be enrolled in school to forward your career' ],
  benefits: ['Competitive wages', 'Paid vacations and 9 holidays', 'Medical, dental benefits', 'Short Term/Long Term Disability and others available', '401(k) Plan with available company match', 'Great working environment'], 
  key_experience: ['HVAC', 'Mechanical', 'Overall years of work experience'],
  relevant_experience: ['Overall work experience', 'HVAC', 'Refrigeration', 'Mechanical']
};

class Home extends Component {
  constructor(){
    super();
  }

  renderQualifications = () => {
    return job.qualifications.map((qualification, i) => {
      return <li key={i}>{qualification}</li>
    })
  }

  renderBenefits = () => {
    return job.benefits.map((benefit, i) => {
      return <li key={i}>{benefit}</li>
    })
  }

  renderKeyExperience = () => {
    return job.key_experience.map((experience, i) => {
      return <li key={i}>{experience}</li>
    })
  }

  renderRelevantExperience = () => {
    return job.relevant_experience.map((experience, i) => {
      return <li key={i}>{experience}</li>
    })
  }

  render() {
    return (<div className="home">
      <Nav />
      <div className="row splash-img">
      </div>
      <div className="row job-info">
        <h1>{job.title}</h1>
        <div className="col s12 m8 job-body">
          <div className="row">
            <div className="col s12 description">
              <h2>Description</h2>
              <p>{job.description}</p>
            </div>
            <div className="col s12 m6 qualifications">
              <h2>Qualifications</h2>
              <ul className="qualifications-list">
                {this.renderQualifications()}
              </ul>
            </div>
            <div className="col s12 m6 benefits">
              <h2>Benefits</h2>
              <ul className="benefits-list">
                {this.renderBenefits()}
              </ul>
            </div>
            <div className="col s12 hide-on-med-and-up key-experience">
              <h2>Key Experience</h2>
              <ul className="key-experience-list">
                {this.renderKeyExperience()}
              </ul>
            </div>
            <div className="col s12 hide-on-med-and-up relevant-experience">
              <h2>Relevant Experience</h2>
              <ul className="relevant-experience-list">
                {this.renderRelevantExperience()}
              </ul>
            </div>
            <div className="col s12 hide-on-med-and-up apply-now">
              <Link to='/apply'>Click here to apply now!</Link>
            </div>
          </div>
        </div>
        <div className="col s12 m4 hide-on-small-only experience">
          <h2>Key Experience</h2>
          <ul className="key-experience-list">
            {this.renderKeyExperience()}
          </ul>
          <h2>Relevant Experience</h2>
          <ul className="relevant-experience-list">
            {this.renderRelevantExperience()}
          </ul>
          <Link to='/apply'>Click here to apply now!</Link>
        </div>
      </div>
    </div>);
  }
};

export default Home;