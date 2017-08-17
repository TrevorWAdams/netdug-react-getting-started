import React, { Component } from 'react';
import './App.css';

import HelloWorldClassWithPropsChecking from '../components/HelloWorldClassWithPropsChecking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorldClassWithPropsChecking />
      </div>
    );
  }
}

export default App;
