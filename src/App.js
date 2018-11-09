import React, { Component } from 'react';
import Nav from './containers/Nav'
import Body from './containers/Body'
import Add from './containers/AddContact'


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Body />
        <Add />
      </div>
    );
  }
}

export default App;
