import { INCREMENT, DECREMENT } from '../constants';

export function incrementCounter() {
  return {
    type: INCREMENT
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT
  };
}
