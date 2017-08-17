import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({ title, content }) => {
  return (
    <div className="post">
    <div className="PageTitle">Post</div>
      <div className="post-title">
        {title}
      </div>
      <div className="post-content">
        {content}
      </div>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Post;
