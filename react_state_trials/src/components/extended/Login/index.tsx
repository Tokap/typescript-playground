import * as React from "react";

import "./Login.css";

export interface LoginProps {
  targetUrl: string;
}

// TODO: Expand as needed for more sophisticated logic
class Login extends React.Component<LoginProps, {}> {
  render() {
    return (
      <div id="login-form">
        <h3>Please Enter Your Credentials:</h3>

        <form action={this.props.targetUrl} method="post">
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
