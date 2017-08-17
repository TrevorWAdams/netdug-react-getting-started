import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Post from '../components/Post';
import PostForm from '../components/PostForm';

class PostContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  };

  state = {
    post: {
      id: '',
      title: '',
      content: ''
    }
  };

  componentWillMount() {
    if (this.props.post) {
      this.setState({
        post: this.props.post
      });
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="PageContainer">
        {isLoggedIn
          ? <PostForm
              id={this.state.post.id}
              title={this.state.post.title}
              content={this.state.post.content}
            />
          : <Post
              title={this.state.post.title}
              content={this.state.post.content}
            />}
      </div>
    );
  }
}

export default PostContainer;
