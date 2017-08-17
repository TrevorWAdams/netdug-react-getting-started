import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(intitialState) {
   const middlewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
  ];

  const enhancers = [applyMiddleware(...middlewares), devtools()];

  const store = createStore(rootReducer, intitialState, compose(...enhancers));
  return store;
}
