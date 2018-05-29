import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { removeAuthToken } from '../../utils/auth';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const hvacLogo = require('../../assets/icons/hvac_logo.svg');
const { toolbarStyles, titleStyles } = require('./styles/navStyles');

export default class Nav extends Component {
  constructor(){
    super();
  }

  signOut = () => {
    removeAuthToken();
    this.props.history.push('/');
  }

  render(){
    const isApplication = this.props.history.location.pathname === '/application';
    return (
      <div className="nav">
        <Toolbar style={toolbarStyles} >
          <ToolbarGroup>
            <Link to='/'><img alt="hvac company logo" className="nav-logo" src={hvacLogo} /></Link>
          </ToolbarGroup>
          <ToolbarGroup>
            {isApplication ? <ToolbarTitle onClick={this.signOut} style={titleStyles} text="Sign Out" /> 
            : <Link to="/apply"><ToolbarTitle style={titleStyles} text="Apply Now" /></Link>}
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}