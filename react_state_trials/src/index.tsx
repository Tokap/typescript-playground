// --- Basic React imports
import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// --- Redux Imports & General Functionality
// import Goodbye from "./components/extended/Goodbye"; // Straight Up Component
// import NavBar from "./components/extended/NavBar";
import FullApp from "./components/extended/FullApp";
import "./index.css";

// --- React Router Imports
// import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <FullApp />,

  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
