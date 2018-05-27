import React, { Component } from 'react';

import Nav from '../global/Nav';

class Home extends Component {
  constructor(){
    super();
  }

  render() {
    return (<div className="home">
      <Nav />
    </div>);
  }
};

export default Home;