import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>Hello Dave I'm const App</div>;
};

export default App;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});
