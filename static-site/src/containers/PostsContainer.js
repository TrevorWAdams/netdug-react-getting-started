import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PostItem from '../components/PostItem';

class PostsContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired,
    onSelectedPost: PropTypes.func.isRequired,
    onDeletePost: PropTypes.func.isRequired
  };

  render() {
    const { isLoggedIn, posts, onSelectedPost, onDeletePost } = this.props;

    return (
      <div className="PageContainer">
        <div className="PageTitle">Posts</div>
        {isLoggedIn &&
          <LinkContainer to="/post">
            <Button bsStyle="primary">Add</Button>
          </LinkContainer>}
        {posts.map(post =>
          <PostItem
            key={post.id}
            post={post}
            isLoggedIn={isLoggedIn}
            deletePost={id => onDeletePost(post.id)} //NOTE: THIS IS A COMMON ERROR
            selectPost={onSelectedPost}
          />
        )}
      </div>
    );
  }
}

export default PostsContainer;
