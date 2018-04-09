// --- Basic React imports
import * as React from "react";

// --- Redux Imports & General Functionality
import AccessTokens from "../../pages/AccessTokens";
import Forms from "../../pages/Forms";
import Overview from "../../pages/Overview";
import ProductFaq from "../../pages/ProductFaq";
import QueryLanguage from "../../pages/QueryLanguage";
import Tutorials from "../../pages/Tutorials";

import SideBar from "../SideBar";

// --- Style Import
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

  // The pattern should be to pass in the top level state to the page component.
  // The page component will then deconstruct and pass through what it needs to
  // render the components it holds.
  render() {
    return (
      <BrowserRouter>
        <div className="flex-grid" style={{ height: "100%" }}>
          <SideBar navDetails={sideBarList} />

          <Route path="/" component={Overview} exact={true} />

          <Route
            path="/form/page"
            render={() => <Forms topLevelState={this.state} />}
            exact={true}
          />

          <Route path="/tutorials" render={() => <Tutorials />} exact={true} />

          <Route
            path="/query_language"
            render={() => <QueryLanguage />}
            exact={true}
          />

          <Route
            path="/access_tokens"
            render={() => <AccessTokens />}
            exact={true}
          />

          <Route path="/faq" render={() => <ProductFaq />} exact={true} />
        </div>
      </BrowserRouter>
    );
  }
}

export default FullApp;
