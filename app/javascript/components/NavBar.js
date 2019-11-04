import React from "react";
import { Link } from "@reach/router";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="NavBar">
      <Link to={`/starters`}>Starters</Link>
      <Link to={`/recipes`}>{`Recipes & Directions`}</Link>
    </div>
  );
};
export default NavBar;
