import * as React from "react";
import DatePicker from "../sfc/Calendar";

class Overview extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Overview.</h1>
          <h2 className="App-content">
            Here are some words regarding an Overview.
          </h2>

          <h3>Please select the date range you're interested in.</h3>
          <DatePicker />
        </header>
      </div>
    );
  }
}

export default Overview;
