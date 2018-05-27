import React, { Component } from 'react';
import './stylesheets/main.css';

const App = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default App;