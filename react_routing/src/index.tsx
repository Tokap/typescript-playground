// --- Basic React imports
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// --- Redux Imports & General Functionality
// Import Redux Provider Functionality for Store Manipulation
import { Provider } from "react-redux";
// Import the Hello wrapped container rather than component
import Hello from "./containers/Hello";

import "./index.css";
// Import what we need from Redux to produce a local Store
import { createStore } from "redux";
// Import the inferface for our Stored State
import { StoreState } from "./types/index";
// Import reducer functionality
import { enthusiasm } from "./reducers/index";

// --- React Router Imports
import { BrowserRouter } from "react-router-dom";

// Instantiate Local Store with Type definition
const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Hello />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement // Declare Definite Return
);

registerServiceWorker();
