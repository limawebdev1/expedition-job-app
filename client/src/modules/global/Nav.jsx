import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const hvacLogo = require('../../assets/icons/hvac_logo.svg');
const { toolbarStyles, titleStyles } = require('./styles/navStyles');

export default class Nav extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="nav">
        <Toolbar style={toolbarStyles} >
          <ToolbarGroup>
            <Link to='/'><img alt="hvac company logo" className="nav-logo" src={hvacLogo} /></Link>
          </ToolbarGroup>
          <ToolbarGroup>
            <Link to="/"><ToolbarTitle style={titleStyles} text="Apply Now" /></Link>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}