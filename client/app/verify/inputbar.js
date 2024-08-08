import React from "react";
import "./inputbar.css"; // Import the CSS file

const InputBar = ({ onSubmit }) => {
  return (
    <div className="input-bar-container">
      <input
        type="text"
        className="input-bar"
        placeholder="Enter the Uniqe ID"
      />
      <button className="input-bar-button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default InputBar;
