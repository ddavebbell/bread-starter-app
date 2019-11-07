import React from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import { deleteStarter } from "../actions";
import "./Starter.css";

const Starter = ({ name, description, phase, id, deleteStarter }) => {
  const handleDelete = e => {
    e.preventDefault();
    deleteStarter(id);
  };

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
          <li>
            <button onClick={handleDelete}>Delete Starter</button>
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default connect(
  null,
  { deleteStarter }
)(Starter);
