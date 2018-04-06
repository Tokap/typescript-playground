import * as React from "react";

// This component betrays the good rule of thumb. If the component needs to maintain it's own state,
// then we properly extend. In other instances, it would make more sense to make a function that
// returns some JSX when it's all done.
class Goodbye extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">You say Goodbye and I say Hello.</h1>
        </header>
      </div>
    );
  }
}

export default Goodbye;
