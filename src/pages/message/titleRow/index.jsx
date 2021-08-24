import React from "react";
import "./titleRowStyles.css";

const TitleRow = ({ user }) => (
  <div id="nameRow">
    <h1>{user}</h1>
  </div>
);

export default TitleRow;
