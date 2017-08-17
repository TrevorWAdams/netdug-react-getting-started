import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PostsContainer from './containers/PostsContainer';
import PostContainer from './containers/PostContainer';
import NotFoundPage from './components/NotFoundPage';

const PostRoute = ({ match, history }) => {
  return <PostContainer postId={match.params.postId} history={history} />;
};

const PostRoutes = ({ match, history }) => {
  return <Route path={`${match.url}/:postId?`} component={PostRoute} history={history} />;
};

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/posts" />} />
        <Route path="/posts" component={PostsContainer} />
        <Route path="/post" component={PostRoutes} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
