import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const initialState = {};

const middleware = [];

const store = createStore(
  rootReducer,
  initialState,
  // composeEnhancer allows us to use applyMiddleware and the chrom extension tool
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
