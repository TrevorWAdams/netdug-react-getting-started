import postsApi from '../api/postsApi';

import {
  CREATE_POST_REQUEST,
  CREATE_POST_FAIL,
  CREATE_POST_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_FAIL,
  DELETE_POST_SUCCESS,
  EDIT_POST_REQUEST,
  EDIT_POST_FAIL,
  EDIT_POST_SUCCESS,
  FETCH_POST_REQUEST,
  FETCH_POST_FAIL,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL
} from '../constants';

export function createPostRequest(post) {
  return {
    type: CREATE_POST_REQUEST,
    post
  };
}

export function createPostFail(message) {
  return {
    type: CREATE_POST_FAIL,
    message
  };
}

export function createPostSuccess(post) {
  return {
    type: CREATE_POST_SUCCESS,
    post
  };
}

export function deletePostRequest(id) {
  return {
    type: DELETE_POST_REQUEST,
    id
  };
}

export function deletePostFail(message) {
  return {
    type: DELETE_POST_FAIL,
    message
  };
}

export function deletePostSuccess() {
  return {
    type: DELETE_POST_SUCCESS
  };
}

export function editPostRequest(post) {
  return {
    type: EDIT_POST_REQUEST,
    post
  };
}

export function editPostFail(message) {
  return {
    type: EDIT_POST_FAIL,
    message
  };
}

export function editPostSuccess(post) {
  return {
    type: EDIT_POST_SUCCESS,
    post
  };
}

export function fetchPostRequest(id) {
  return {
    type: FETCH_POST_REQUEST,
    id
  };
}

export function fetchPostFail(message) {
  return {
    type: FETCH_POST_FAIL,
    message
  };
}

export function fetchPostSuccess(post) {
  return {
    type: FETCH_POST_SUCCESS,
    post
  };
}

export function fetchPostsRequest() {
  return {
    type: FETCH_POSTS_REQUEST
  };
}

export function fetchPostsFail(message) {
  return {
    type: FETCH_POSTS_FAIL,
    message
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts
  };
}

export function createPost(post) {
  return function(dispatch) {
    dispatch(createPostRequest(post));
    return postsApi
      .createPost(post)
      .then(post => {
        dispatch(createPostSuccess(post))
        .then(dispatch(fetchPosts()));
      })
      .catch(error => {
        dispatch(createPostFail(error.message));
      });
  };
}

export function deletePost(id) {
  return function(dispatch) {
    dispatch(deletePostRequest(id));
    return postsApi
      .deletePost({ id: id })
      .then(()=>dispatch(deletePostSuccess())
      .then(dispatch(fetchPosts())))
      .catch(error => {
        dispatch(deletePostFail(error.message));
      });
  };
}

export function editPost(post) {
  return function(dispatch) {
    dispatch(editPostRequest(post));
    return postsApi
      .updatePost(post)
      .then(post => {
        dispatch(editPostSuccess(post))
        .then(dispatch(fetchPosts()));
      })
      .catch(error => {
        dispatch(editPostFail(error.message));
      });
  };
}

export function fetchPost(id) {
  return function(dispatch) {
    dispatch(fetchPostRequest(id));
    return postsApi
      .getPost(id)
      .then(post => {
        dispatch(fetchPostSuccess(post));
      })
      .catch(error => {
        dispatch(fetchPostFail(error.message));
      });
  };
}

export function fetchPosts() {
  return function(dispatch) {
    dispatch(fetchPostsRequest());
    return postsApi
      .getPosts()
      .then(posts => {
        dispatch(fetchPostsSuccess(posts));
      })
      .catch(error => {
        dispatch(fetchPostsFail(error.message));
      });
  };
}
