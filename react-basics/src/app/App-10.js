import React, { Component } from 'react';
import './App.css';

import Things from '../components/Things'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Things />
      </div>
    );
  }
}

export default App;
