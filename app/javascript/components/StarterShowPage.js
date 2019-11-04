import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStarterById } from "../actions";
import NavBar from "./NavBar";
import "./StarterShowPage.css";

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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  const feedTime = starter.feeding_time;

  function prettyDate2(time) {
    let date = new Date(parseInt(time));
    let localeSpecificTime = date.toLocaleTimeString();
    return localeSpecificTime.replace(/:\d+ /, " ");
  }

  return (
    <div>
      <NavBar />
      <div className="ShowStarter">
        <h1>{starter.name} </h1>
        <li>
          <b>Phase:</b> {starter.phase}
        </li>
        <li>
          <b>Description:</b> {starter.description}
        </li>
        <li>
          <b>Feed Time:</b> {prettyDate2(feedTime)}
        </li>
      </div>
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
