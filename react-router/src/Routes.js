import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import TopicsPage from './components/TopicsPage';
import NotFoundPage from './components/NotFoundPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/topics" component={TopicsPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  )
}

export default Routes;