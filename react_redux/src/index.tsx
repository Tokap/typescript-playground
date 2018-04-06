// The usual React imports
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// Import Redux Provider Functionality for Store Manipulation
import { Provider } from "react-redux";
// Import what we need from Redux to produce a local Store
import { createStore } from "redux";
// Import the inferface for our Stored State
import { StoreState } from "./types/index";
// Import reducer functionality
import { enthusiasm } from "./reducers/index";
// Import the Hello wrapped container rather than component
import Hello from "./containers/Hello";
import "./index.css";

// Instantiate Local Store with Type definition
const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById("root") as HTMLElement // Declare Definite Return
);

registerServiceWorker();
