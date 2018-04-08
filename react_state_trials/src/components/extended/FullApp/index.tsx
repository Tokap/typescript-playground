// --- Basic React imports
import * as React from "react";

// --- Redux Imports & General Functionality
import Overview from "../../pages/Overview"; // Straight Up Component
// import TextHolder from "../sfc/TextHolder";
import Forms from "../../pages/Forms";
import SideBar from "../SideBar";
import "./FullApp.css";

// --- React Router Imports
import { BrowserRouter, Route } from "react-router-dom";

// --- Import Required Types:
import { State } from "../../../types";

import sideBarList from "../SideBar/AppSpecific";

// Wrapped Application to Store State
class FullApp extends React.Component<{}, State> {
  constructor(props: Object) {
    super(props);

    this.state = {
      // -- User State
      userId: 1,
      name: "",
      address: "",
      phone: "",

      // State Functions:
      setTopLevelState: this.setState.bind(this)
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="flex-grid" style={{ height: "100%" }}>
          <SideBar navDetails={sideBarList} />

          <Route path="/" component={Overview} exact={true} />

          <Route
            path="/form/page"
            render={() => {
              return <Forms topLevelState={this.state} />;
            }}
            exact={true}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default FullApp;
