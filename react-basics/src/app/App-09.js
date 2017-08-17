import React, { Component } from 'react';
import './App.css';

import ComponentStyledInJs from '../components/ComponentStyledInJs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentStyledInJs>I am styled in js</ComponentStyledInJs>
      </div>
    );
  }
}

export default App;
