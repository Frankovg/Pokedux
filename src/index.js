import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
// createStore ya no se usa, hay que usar el toolkit de redux, pero así lo podemos usar igual.
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { logger } from "./middlewares";
// para cargar el pokemon customizado del middleware
// import { featuring } from "./middlewares";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// enhacer que envía la info al DevTools desde el store
const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger)
  // applyMiddleware(logger, featuring)
);

const store = createStore(rootReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
