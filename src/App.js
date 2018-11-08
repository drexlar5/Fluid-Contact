import React, { Component } from 'react';
import Nav from './containers/Nav'
import Body from './containers/Body'


class App extends Component {
  render() {
    return (
      <div>
        <Nav/>      
        <Body/>
      </div>
    );
  }
}

export default App;
