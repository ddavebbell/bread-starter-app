import React, { useState } from "react";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { addStarter } from "../actions";
import Starter from "./Starter";
import "./CreateStarter.css";

const CreateStarter = ({ error, loading, addStarter, starters }) => {
  const [starterName, setStarterName] = useState("");
  const [starterDescription, setStarterDescription] = useState("");
  const [starterFeedTime, setStarterFeedTime] = useState("");

  if (loading) {
    return <center className="loading-text">Loading...</center>;
  }

  if (error) {
    return <div>ERROR!! {error.message}</div>;
  }

  const nameChange = e => {
    setStarterName(e.target.value);
  };

  const descriptionChange = e => {
    setStarterDescription(e.target.value);
  };

  const handleFeedTime = e => {
    setStarterFeedTime(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const starter = {
      name: starterName,
      description: starterDescription,
      feeding_time: starterFeedTime
    };
    addStarter(starter);
  };

  return (
    <div>
      <NavBar />
      <h1 className="Title">Create Your Starter</h1>
      <div className="CreateStarter">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Pick A Name</label>
            <input
              className="FormName"
              type="text"
              placeholder="Input Starter Name"
              value={starterName}
              onChange={nameChange}
            />
          </div>
          <div>
            <label>Pick A Morning Feeding Time</label>
            <input
              className="FeedTime"
              type="time"
              value={starterFeedTime}
              onChange={handleFeedTime}
            />
          </div>
          <div>
            <textarea
              className="FormTextArea"
              placeholder="Write a Description"
              type="textarea"
              value={starterDescription}
              onChange={descriptionChange}
            />
          </div>

          <button type="submit">Create Starter</button>
        </form>
        <ul>
          {starters
            ? starters.map(s => (
                <li key={s.id}>
                  <Starter
                    id={s.id}
                    name={s.name}
                    description={s.description}
                    phase={s.phase}
                  />
                </li>
              ))
            : []}
        </ul>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    starters: state.starters,
    error: state.error,
    loading: state.loading
  };
};

export default connect(
  mapState,
  { addStarter }
)(CreateStarter);
