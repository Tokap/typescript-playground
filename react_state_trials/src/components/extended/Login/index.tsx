import * as React from "react";

import "./Login.css";

class Login extends React.Component<{}, {}> {
  render() {
    return (
      <div id="new-form">
        <h3>Please Enter Your Credentials:</h3>

        <form action="/user" method="post">
          <div className="form-field">
            <label htmlFor="username">Email</label>
            <input type="text" name="username" maxLength={20} />
            <ul id="username-error" />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              pattern=".{8,}"
              title="Must be at least 8 characters"
            />
            <ul id="password-error" />
          </div>

          <div id="submit-container">
            <input type="submit" defaultValue="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
