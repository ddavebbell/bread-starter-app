import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStarters } from "../actions";
import Starter from "./Starter";
import NavBar from "./NavBar";

const StarterDisplayPage = ({ getStarters, loading, error, starters }) => {
  useEffect(() => {
    getStarters();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }
  return (
    <div className="StarterDisplayPage">
      <NavBar />
      <h2>StarterDisplayPage:</h2>
      <ul>
        {starters
          ? starters.map(s => (
              <li key={s.id}>
                <Starter
                  name={s.name}
                  description={s.description}
                  phase={s.phase}
                />
              </li>
            ))
          : []}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    starters: state.starters,
    loading: state.loading,
    error: state.error
  };
};

export default connect(
  mapState,
  { getStarters }
)(StarterDisplayPage);
