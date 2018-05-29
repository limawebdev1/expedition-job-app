import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signinUser, signupUser } from './actions';
import SigninForm from './components/SigninForm';
import SignupForm from './components/SignupForm';

class Apply extends Component {
  constructor(){
    super();
    this.state = {
      view: 'apply'
    }
  }

  showSignup = () => {
    this.setState({
      view: 'signup'
    });
  }

  showSignin = () => {
    this.setState({
      view: 'signin'
    });
  }

  renderApply = () => {
    return (<div className="col s12 valign center-align">
      <h1>Start Your Expedition</h1>
      <p>Sign up or sign in to start applying to jobs!</p>
      <button onClick={this.showSignup}>Sign Up</button>
      <button onClick={this.showSignin}>Sign In</button>
    </div>);
  }

  signinUser = async (user) => {
    await this.props.signinUser(user);
    this.props.history.push('/application');
  }

  signupUser = async (user) => {
    await this.props.signupUser(user);
    this.props.history.push('/application');
  }

  renderView = () => {
    const { signinUser, signupUser } = this;
    switch(this.state.view){
      case 'apply': return this.renderApply(); break;
      case 'signin' : return <SigninForm onSubmit={signinUser} />; break;
      case 'signup': return <SignupForm onSubmit={signupUser} />; break;
    }
  }

  render() {
    return <div className="apply">
      <div className="row valign-wrapper">
        {this.renderView()}
      </div>
    </div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signinUser, signupUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Apply);