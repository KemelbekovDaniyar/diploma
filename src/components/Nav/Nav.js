import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  return (
    <div className="Nav">
      <nav className="topbar">
        {/* <div className="logo">
          <NavLink to="/">
            {props.children}
          </NavLink>
            </div> */}
        <ul>
          <li className="NavItem">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/deliver">Deliver</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}