import * as React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

// Type Signatures To Be Moved to New Files:
export interface BasicRoute {
  classList?: Array<string>;
  fieldName: string;
  path: string;
}

export interface NavDetails extends BasicRoute {
  dropDownOptions?: Array<BasicRoute>;
  faIcon?: string;
  headerImage?: string;
}

export interface SubNavProps {
  navPillList: Array<BasicRoute>;
}

export interface SubNavState {
  active: boolean;
}

export interface SideBarProps {
  navDetails: Array<NavDetails>;
}

// Make className string from Route Details
function classNameFactory(classList?: Array<string>) {
  return classList == null
    ? "navPill"
    : classList.reduce((nameString, className) => (`${nameString} ${className}`), "navPill");
}

// Class To Create Optional SubNavComponent
class SubNavSelection extends React.Component<SubNavProps, SubNavState> {
  constructor(props: SubNavProps) {
    super(props);
    this.state = { active: false };

    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState({ active: !this.state.active });
  }

  renderNavPills(dropDownOptions: Array<BasicRoute>) {
    return dropDownOptions.map((pathDetails: BasicRoute, i: number) => {
      const { classList, fieldName, path } = pathDetails;
      const classes = classNameFactory(classList);

      return (
        <NavLink to={path} activeClassName="active" className={classes} key={i}>
          {fieldName}
        </NavLink>
      );
    });
  }

  render() {
    const { navPillList } = this.props;

    return (
      <div style={{ display: "inline-block", margin: "0 0 0 10px" }}>

        <i className="fa fa-angle-left" onClick={() => this.toggleActive()} />

        <ul className={`sub-nav-container ${this.state.active ? "" : "navbar-hide"}`}>
          {this.renderNavPills(navPillList)}
        </ul>
      </div>
    );
  }
}

// Wrapper to Review Nullable Field
function makeDropDown(dropDownOptions?: Array<BasicRoute>) {
  if (dropDownOptions == null || dropDownOptions.length === 0) {
    return null;
  }

  return <SubNavSelection navPillList={dropDownOptions} />;
}

// Individual Nav Row & Maybe SubList
class NavSelection extends React.Component<NavDetails, SubNavState> {
  constructor(props: NavDetails) {
    super(props);
  }

  render() {
    const { classList, dropDownOptions, faIcon, fieldName, path } = this.props;

    const classes = classNameFactory(classList);
    const faIconEl = <i className={`fa ${faIcon}`} />;
    const dropdownInterface = makeDropDown(dropDownOptions);

    return (
      <li>
        <NavLink to={path} activeClassName="active" className={classes}>
          {faIcon == null ? null : faIconEl}
          {fieldName}
          {dropdownInterface == null ? null : dropdownInterface}
        </NavLink>
      </li>
    );
  }
}

// Core Component to Combine Sidebar Functionality
class SideBar extends React.Component<SideBarProps, {}> {
  render() {
    const { navDetails } = this.props;

    return (
      <ul className="navBar">
        {navDetails.map(navPillDetails => (<NavSelection {...navPillDetails} />))}
      </ul>
    );
  }
}

export default SideBar;
