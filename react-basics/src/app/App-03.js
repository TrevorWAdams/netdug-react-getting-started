import React, { Component } from 'react';
import './App.css';

import HelloWorldWithProps from '../components/HelloWorldWithProps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorldWithProps />
      </div>
    );
  }
}

export default App;
