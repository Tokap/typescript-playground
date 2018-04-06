import * as React from "react";
import "./App.css";

const logo = require("./logo.svg");

class App extends React.Component {
  // Setup For Top Level Components:

  // Generic Update Functions
  updateSimpleField(fieldName: string, value: string | number) {
    this.setState({ [fieldName]: value });
  }

  toggleField(fieldName: string) {
    this.setState({ [fieldName]: !this.state[fieldName] });
  }

  // Render amalgamated Application
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
