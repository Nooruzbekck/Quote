import React from "react";
import "./Header.css";

export const Header = ({ onToggleBlock }) => {
  return (
    <header>
      <p className="name-pro">Create Quotes</p>
      <div className="div">
        <p onClick={() => onToggleBlock("all-quotes")}>All Quotes</p>
        <p onClick={() => onToggleBlock("new-quotes")}>New Quotes</p>
      </div>
    </header>
  );
};
