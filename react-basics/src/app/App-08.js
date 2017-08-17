import React, { Component } from 'react';
import './App.css';

import ComponentStyledWithCss from '../components/ComponentStyledWithCss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentStyledWithCss />
      </div>
    );
  }
}

export default App;
