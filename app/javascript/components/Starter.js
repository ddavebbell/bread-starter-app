import React from "react";
import { Link } from "@reach/router";
import "./Starter.css";

const Starter = ({ name, description, phase, id }) => {
  return (
    <div className="Starter">
      <Link to={`/starters/${id}`}>
        <h1>{name}</h1>
        <ul>
          <li>
            <b>Phase: </b>
            {phase}
          </li>
          <li>
            <b>Desc: </b>
            {description}
          </li>
        </ul>
      </Link>
    </div>
  );
};
export default Starter;
