import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStarterById } from "../actions";

const StarterShowPage = ({
  starter,
  getStarterById,
  starterId,
  loading,
  error
}) => {
  useEffect(() => {
    getStarterById(starterId);
  }, []);

  console.log(starter);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }
  return (
    <div>
      <h1>{starter.name} </h1>
      <b>show page!</b>
      {starter.phase}
      <br />
      <i>{starter.description}</i>
    </div>
  );
};

const mapState = state => {
  return {
    starter: state.starters,
    loading: state.loading,
    error: state.error
  };
};

export default connect(
  mapState,
  { getStarterById }
)(StarterShowPage);
