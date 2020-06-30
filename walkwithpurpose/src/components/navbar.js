import React from "react";
import { NavLink } from "react-router-dom";
import Wwplogo from "./images/WWP_Logo.jpg";

const Navbar = props => (
  <nav>
    <img
      className="logo-image"
      src={Wwplogo}
      alt="brand logo in black and white"
    />
    <ul className="nav-menu">
      <li>
        <NavLink className="nav-menu-link" exact to="/">
          Homepage
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-menu-link" to="/profile">
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
