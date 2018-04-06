import * as React from "react";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Goodbye
          </NavLink>
        </li>
        <li>
          <NavLink to="/text" activeClassName="active">
            TextSection
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBar;
