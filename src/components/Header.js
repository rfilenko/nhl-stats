import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/roster">
        Roster
      </NavLink>
      <NavLink exact to="/contact">
        Contact
      </NavLink>
    </header>
  );
}

export default Header;
