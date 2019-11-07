import React from "react";
import { Link } from "@reach/router";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="NavBar">
      <Link to={`/starters`}>Starters</Link>
      <Link to={`/recipes`}>{`Recipes & Directions`}</Link>
      <Link to={`/starters/create`}>Create a Starter</Link>
    </div>
  );
};
export default NavBar;
