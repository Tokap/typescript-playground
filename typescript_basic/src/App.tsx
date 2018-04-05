import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from './components/ExampleComponent'
import UserComponent from './components/UserComponent'

ReactDOM.render(
  <div>
    <h1>Hello, Welcome to the first page</h1>
    <FirstComponent />
    <UserComponent
      name="Logrocket"
      age={105}
      address="283 Las Vegas Blvd"
      dob={new Date()}
    />
  </div>,
  document.getElementById("root")
);