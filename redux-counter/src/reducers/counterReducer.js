import { INCREMENT, DECREMENT } from '../constants';
import initialState from './initialState';

function counterReducer(state = initialState.counter, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
