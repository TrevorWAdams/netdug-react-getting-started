import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PostItem.css';

const PostItem = ({ isLoggedIn, post, deletePost, selectPost }) => {
  return (
    <div className="post-item">
      <div className="title">
        <Link to={`/post/${post.id}`} onClick={id => selectPost(post.id)}>
          {post.title}
        </Link>
      </div>
      {isLoggedIn &&
        <div className="post-buttons">
          <Link to={`/post/${post.id}`}>
              <span className="badge badge-default badge-pill edit-button">
                Edit
              </span>
          </Link>
          <div onClick={id => deletePost(post.id)}>
            <span className="badge badge-default badge-pill delete-button">
              Delete
            </span>
          </div>
        </div>}
    </div>
  );
};

PostItem.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  deletePost: PropTypes.func.isRequired,
  selectPost: PropTypes.func.isRequired
};

export default PostItem;
