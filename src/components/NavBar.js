import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav className="topNav">
    <NavLink exact activeClassName="active" to="/">
      Home
    </NavLink>
    <NavLink exact activeStyle={{ color: "green" }} to="/about">
      About
    </NavLink>
  </nav>
);

export default NavBar;
