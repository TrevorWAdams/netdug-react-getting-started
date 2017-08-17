import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import PostItem from '../components/PostItem';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorIndicator from '../components/ErrorIndicator';

import { fetchPosts, deletePost } from '../actions/postsActions';

class PostsContainer extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const {
      deletePost,
      hasErrored,
      isLoading,
      isLoggedIn,
      posts
    } = this.props;

    return (
      <div className="PageContainer">
        <div className="PageTitle">Posts</div>
        {isLoading
          ? <LoadingIndicator />
          : hasErrored ? <ErrorIndicator /> : null}
        {isLoggedIn &&
          <LinkContainer to="/post">
            <Button bsStyle="primary">Add</Button>
          </LinkContainer>}
        {posts &&
          posts.map(post =>
            <PostItem
              key={post.id}
              post={post}
              isLoggedIn={isLoggedIn}
              onDeletePost={deletePost}
            />
          )}
      </div>
    );
  }
}

PostsContainer.propTypes = {
  deletePost: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool,
  isLoading: PropTypes.bool,
  isLoggedIn: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    hasErrored: state.posts.hasErrored,
    isLoading: state.posts.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    posts: state.posts.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(deletePost(id)),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
