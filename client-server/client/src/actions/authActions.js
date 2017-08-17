import { LOGIN, LOGOUT } from '../constants';

export function login() {
  return {
    type: LOGIN
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
