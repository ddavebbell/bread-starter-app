import React from "react";

const StarterShowPage = ({ starter, getStarterById }) => {
  useEffect(() => {
    getStarterById(starter_id);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }
  return <div>I am the {starter.name} starter show page!</div>;
};

const mapState = state => {
  return {
    starters: state.starters
  };
};

export default connect(
  mapState,
  { getStarterById }
)(StarterShowPage);
