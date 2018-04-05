import * as React from "react";

import "./App.css";

// Example Using Context API
const { createContext } = React;
const store = {
  todo: ["Learn React Context API", "Write Medium Article"]
};

const myContext = createContext(store);

// Once we have established context, you create a single myContext.Provider instance
// that wraps zero or more myContext.Consumer components

const logo = require("./logo.svg");

class App extends React.Component {
  render() {
    return (
      <myContext.Provider value={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React 16.3 Context API</h1>
          </header>
          <h2>Things to do today:</h2>
          <myContext.Consumer>
            {state =>
              state.todo.map((todo, i) => (
                <h4 key={i}>
                  {i + 1}. {todo}
                </h4>
              ))
            }
          </myContext.Consumer>
        </div>
      </myContext.Provider>
    );
  }
}

export default App;

// "I am the machine!!!"
