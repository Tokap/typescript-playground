// --- Basic React imports
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// --- Redux Imports & General Functionality
import Goodbye from "./components/extended/Goodbye"; // Straight Up Component
import NavBar from "./components/extended/NavBar";
import "./index.css";

// --- React Router Imports
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavBar />

      <Route path="/" component={Goodbye} exact={true} />
    </div>
  </BrowserRouter>,

  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
