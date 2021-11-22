import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
  const { initialize } = useMockData();
  const handleClick = () => {
    console.log("handleClick");
    initialize();
  };
  return (
    <div className="container mt-5">
      <h1> Main Page</h1>
      <h3>Init data in Firebase</h3>
      <button className="btn btn-primary" onClick={handleClick}>
        Initialize
      </button>
    </div>
  );
};

export default Main;
