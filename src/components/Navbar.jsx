import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
          <NavLink to="./" exact style={{color: 'white',textDecoration: 'none'}} className="Home">
              Home
            </NavLink>
        <ul>
          <li>
            <NavLink to="all" exact  style={{color: 'white',textDecoration: 'none'}}>
              All users
            </NavLink>
          </li>
          <li>
            <NavLink to="adduser" exact  style={{color: 'white',textDecoration: 'none'}}>
              Add users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
