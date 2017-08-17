import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavigationContainer from './containers/NavigationContainer';
import Routes from './Routes';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationContainer />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
