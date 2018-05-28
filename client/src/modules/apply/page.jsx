import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Apply extends Component {
  render() {
    return <div className="apply">
      <div className="row valign-wrapper">
        <div className="col s12 valign center-align">
          <h1>Start Your Expedition</h1>
          <p>Sign up or sign in to start applying to jobs!</p>
          <Link to='/signup'><button>Sign Up</button></Link>
          <Link to='/signin'><button>Sign In</button></Link>
        </div>
      </div>
    </div>;
  }
}

export default Apply;