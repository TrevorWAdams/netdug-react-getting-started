import React from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

const deletePost = id => {
  console.log('deletePost', id);
};

const editPost = id => {
  console.log('editPost', id);
};

const Posts = ({ posts, isLoggedIn, selectPost }) => {
  return (
    <div>
      {posts.map(post =>
        <PostItem
          key={post.id}
          postId={post.id}
          postTitle={post.title}
          isLoggedIn={isLoggedIn}
          deletePost={deletePost}
          editPost={editPost}
          selectPost={selectPost}
        />
      )}
    </div>
  );
};

Posts.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  selectPost: PropTypes.func.isRequired
};

export default Posts;
