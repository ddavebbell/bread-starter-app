import React from "react";
import { Link } from "@reach/router";
const Starter = ({ name, description, phase, id }) => {
  return (
    <div className="Starter">
      <Link to={`/starters/${id}`}>
        <h2>{name}</h2>
      </Link>
      <b>Phase: </b>
      <i>{phase}</i>
      <br />
      <b>Desc: </b>
      <i>{description}</i>
    </div>
  );
};
export default Starter;
