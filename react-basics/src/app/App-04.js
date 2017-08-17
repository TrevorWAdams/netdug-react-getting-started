import React, { Component } from 'react';
import './App.css';

import HelloWorldClassWithProps from '../components/HelloWorldClassWithProps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorldClassWithProps />
      </div>
    );
  }
}

export default App;
