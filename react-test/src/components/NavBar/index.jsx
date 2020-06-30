import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/game">Game</NavLink>
      </li>
      <li>
        <NavLink to="/settings">Settings</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
