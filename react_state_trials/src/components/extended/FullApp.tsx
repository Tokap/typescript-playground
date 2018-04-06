// --- Basic React imports
import * as React from "react";

// --- Redux Imports & General Functionality
import Goodbye from "./Goodbye"; // Straight Up Component
import TextHolder from "../sfc/TextHolder";
import Forms from "../pages/Forms";
import NavBar from "./NavBar";

// --- React Router Imports
import { BrowserRouter, Route } from "react-router-dom";

// --- Import Required Types:
import { State } from "../../types";

// Wrapped Application to Store State
class FullApp extends React.Component<{}, State> {
  constructor(props: Object) {
    super(props);
    // -- Set Starting State
    this.state = {
      // -- Page State
      currentPage: 1,
      maxPage: 6, // -- User data
      userId: 1,
      name: "",
      address: "",
      phone: "",
      // State Functions:
      setTopLevelState: this.setState.bind(this)
    };

    this.getState = this.getState.bind(this);
  }

  getState() {
    return this.state;
  }

  render() {
    console.info("This is state: ", this.state);
    return (
      <BrowserRouter>
        <div>
          <NavBar />

          <Route path="/" component={Goodbye} exact={true} />

          <Route
            path="/text"
            render={() => {
              const { name, setTopLevelState } = this.state;

              return (
                <TextHolder
                  fieldName="name"
                  textValue={name}
                  setTopLevelState={setTopLevelState}
                />
              );
            }}
            exact={true}
          />

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
