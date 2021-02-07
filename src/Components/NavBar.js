import React from "react";
import avatar from "../img/avatar.jpeg";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt=""></img>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/projects" exact activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li> */}
        </ul>
        <footer className="footer">
          <p>@2021 Tanhapon Tosirikul</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
