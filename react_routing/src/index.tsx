// --- Basic React imports
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// --- Redux Imports & General Functionality
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StoreState } from "./types/index";
import { enthusiasm } from "./reducers/index";

import Hello from "./containers/Hello"; // Wrapped Component -> Redux Container
import Goodbye from "./components/extended/Goodbye"; // Straight Up Component

import NavBar from "./components/extended/NavBar";
import "./index.css";

// --- React Router Imports
import { BrowserRouter, Route } from "react-router-dom";

// Instantiate Local Store with Type definition & Reducer
const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavBar />

        <Route path="/" component={Hello} exact={true} />
        <Route path="/goodbye" component={Goodbye} exact={true} />
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
