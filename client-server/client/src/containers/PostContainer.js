import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ErrorIndicator from '../components/ErrorIndicator';
import LoadingIndicator from '../components/LoadingIndicator';
import Post from '../components/Post';
import PostForm from './PostForm';

import { fetchPost, createPost, editPost } from '../actions/postsActions';

class PostContainer extends Component {
  componentWillMount() {
    if (this.props.postId) {
      this.props.fetchPost(this.props.postId);
    }
  }

  handlePostFormSubmit = data => {
    if (data.id === '') {
      this.props.createPost(data);
    } else {
      this.props.editPost(data);
    }
    this.props.history.push('/posts');
  };

  render() {
    const { isLoggedIn, post, isLoading, hasErrored } = this.props;

    if (isLoading) {
      return <LoadingIndicator />;
    }

    if (hasErrored) {
      return <ErrorIndicator />;
    }

    return (
      <div className="PageContainer">
        {isLoggedIn
          ? <PostForm onSubmit={this.handlePostFormSubmit} />
          : post ? <Post post={post} /> : <Redirect to="/posts" />}
      </div>
    );
  }
}

PostContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  createPost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  fetchPost: PropTypes.func.isRequired,
  postId: PropTypes.string,
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  })
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.posts.isLoading,
    hasErrored: state.posts.hasErrored,
    post: state.posts.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    editPost: post => dispatch(editPost(post)),
    fetchPost: id => dispatch(fetchPost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
