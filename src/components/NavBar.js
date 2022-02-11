import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const linkStyles = {
    display: "inline-block",
    width: "55px",
    padding: "15px",
    margin: "0 20px 12px",
    backgroundColor: "forestgreen",
    color: "#E8FCCF",
  }

  return (
  <div className="navbar">
    <NavLink
      to="/"
      exact
      style={linkStyles}
      activeStyle={{backgroud: "yellow",}}
      >
        Home
    </NavLink>

    <NavLink
      to="/movies"
      exact
      style={linkStyles}
      // activeStyle={{backgroud: "#85E64C"}}
      >
        Movies
    </NavLink>

    <NavLink
      to="/directors"
      exact
      style={linkStyles}
      // activeStyle={{backgroud: "#85E64C"}}
      >
        Directors
    </NavLink>

    <NavLink
      to="/actors"
      exact
      style={linkStyles}
      // activeStyle={{backgroud: "#85E64C"}}
      >
        Actors
    </NavLink>
  </div>);
}

export default NavBar;
