import { LOGIN, LOGOUT } from '../constants';
import initialState from './initialState';

function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { isLoggedIn: true });
    case LOGOUT:
      return Object.assign({}, state, { isLoggedIn: false });
    default:
      return state;
  }
}

export default authReducer;
