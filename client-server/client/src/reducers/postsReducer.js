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
  FETCH_POST_SUCCESS,
  FETCH_POST_FAIL,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL
} from '../constants';

import initialState from './initialState';

function findPostIndex(posts, post) {
  return posts.findIndex(p => p.id === post.id);
}

function postsReducer(state = initialState.posts, action) {
  let posts;

  switch (action.type) {
    case CREATE_POST_REQUEST:
      posts = state.posts.concat(action.post);
      return Object.assign({}, state, {
        posts: posts,
        isLoading: true,
        hasErrored: false
      });
    case CREATE_POST_FAIL:
      return Object.assign({}, state, { isLoading: false, hasErrored: true });
    case CREATE_POST_SUCCESS:
      return Object.assign({}, state, {
        hasErrored: false,
        isLoading: false,
        post: action.post
      });
    case DELETE_POST_REQUEST:
      posts = state.posts.filter(p => p.id !== action.id);
      return Object.assign({}, state, {
        posts: posts,
        isLoading: true,
        hasErrored: false
      });
    case DELETE_POST_FAIL:
      return Object.assign({}, state, { isLoading: false, hasErrored: true });
    case DELETE_POST_SUCCESS:
      return Object.assign({}, state, { isLoading: false, hasErrored: false });
    case EDIT_POST_REQUEST:
      posts = state.posts;
      const postIndex = findPostIndex(posts, action.post);
      const newPosts = [
        ...posts.slice(0, postIndex),
        action.post,
        ...posts.slice(postIndex + 1, posts.length)
      ];
      return Object.assign({}, state, {
        posts: newPosts,
        isLoading: true,
        hasErrored: false
      });
    case EDIT_POST_FAIL:
      return Object.assign({}, state, { isLoading: false, hasErrored: true });
    case EDIT_POST_SUCCESS:
      return Object.assign({}, state, {
        hasErrored: false,
        isLoading: false,
        post: action.post
      });
    case FETCH_POST_REQUEST:
      return Object.assign({}, state, { isLoading: true, hasErrored: false });
    case FETCH_POST_FAIL:
      return Object.assign({}, state, { isLoading: false, hasErrored: true });
    case FETCH_POST_SUCCESS:
      return Object.assign({}, state, {
        hasErrored: false,
        isLoading: false,
        post: action.post
      });
    case FETCH_POSTS_REQUEST:
      return Object.assign({}, state, { isLoading: true, hasErrored: false });
    case FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        hasErrored: false,
        isLoading: false,
        posts: action.posts,
        post: {
          id: '',
          title: '',
          content: ''
        }
      });
    case FETCH_POSTS_FAIL:
      return Object.assign({}, state, { isLoading: false, hasErrored: true });
    default:
      return state;
  }
}

export default postsReducer;
