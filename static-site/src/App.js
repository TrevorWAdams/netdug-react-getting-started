import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import PostsContainer from './containers/PostsContainer';
import PostContainer from './containers/PostContainer';
import NotFoundPage from './components/NotFoundPage';

class App extends Component {
  state = {
    isLoggedIn: false,
    posts: [
      {
        id: '1',
        title: 'Post title 1',
        content: 'Post content 1'
      },
      {
        id: '2',
        title: 'Post title 2',
        content: 'Post content 2'
      },
      {
        id: '3',
        title: 'Post title 3',
        content: 'Post content 3'
      }
    ],
    post: {
      id: '',
      title: '',
      content: ''
    }
  };

  handleSelectedPost = id => {
    console.log('select', id);
    const post = this.state.posts.find(post => post.id === id);
    this.setState({
      post: post
    });
  };

  handleDeletePost = id => {
    console.log('delete', id);
  };

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn, posts, post } = this.state;

    return (
      <Router>
        <div className="App">
          <Header
            isLoggedIn={isLoggedIn}
            login={this.handleLogin}
            logout={this.handleLogout}
          />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/posts" />} />
            <Route
              path="/posts"
              render={() =>
                <PostsContainer
                  isLoggedIn={isLoggedIn}
                  posts={posts}
                  onSelectedPost={this.handleSelectedPost}
                  onDeletePost={this.handleDeletePost}
                />}
            />
            <Route
              path="/post"
              render={() =>
                <PostContainer isLoggedIn={isLoggedIn} post={post} />}
            />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
