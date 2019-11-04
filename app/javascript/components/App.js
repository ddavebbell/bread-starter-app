import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import { Router } from "@reach/router";
import StarterDisplayPage from "./StarterDisplayPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <StarterDisplayPage path="/" />
      </Router>
    </Provider>
  );
};

export default App;

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);
