import React, { Component } from 'react';
import './App.css';

import HelloWorldWithPropsChecking from '../components/HelloWorldWithPropsChecking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorldWithPropsChecking />
      </div>
    );
  }
}

export default App;
