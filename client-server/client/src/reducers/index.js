import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  form: formReducer
});

export default rootReducer;
