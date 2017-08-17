import React, { Component } from 'react';
import './App.css';

import HelloWorldClass from '../components/HelloWorldClass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorldClass />
      </div>
    );
  }
}

export default App;
