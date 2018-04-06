import * as React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Hello
          </NavLink>
        </li>
        <li>
          <NavLink to="/goodbye" activeClassName="active">
            Goodbye
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBar;
