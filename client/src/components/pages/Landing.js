import React from "react";
import { Link } from "react-router-dom";

const landingPage = () => {
  return (
    <div>
      <Link to="/Info">Information</Link>
      <h1></h1>
      <Link to="/Tbd1">tbd1</Link>
      <h1></h1>
      <Link to="/Tbd2">tbd2</Link>
      <h1></h1>
      <Link to="/Tbd3">tbd3</Link>
    </div>
  );
};

export default landingPage;
