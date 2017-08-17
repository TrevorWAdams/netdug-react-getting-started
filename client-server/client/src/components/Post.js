import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="PageTitle">Post</div>
      <div className="post-title">
        {post.title}
      </div>
      <div className="post-content">
        {post.content}
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
