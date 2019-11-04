import React from "react";

const Starter = ({ name, description, phase }) => {
  return (
    <div className="Starter">
      <h2>{name}</h2>
      <b>Phase: </b>
      <i>{phase}</i>
      <br />
      <b>Desc: </b>
      <i>{description}</i>
    </div>
  );
};
export default Starter;
