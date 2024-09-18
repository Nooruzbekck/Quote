import React, { useState } from "react";
import "./Header.css";

export const Header = ({ onToggleBlock }) => {
  return (
    <div>
      <header>
        <p className="name-pro">Create Quotes</p>
        <div className="div">
          <p onClick={() => onToggleBlock("all-quotes")}>All Quotes</p>
          <p onClick={() => onToggleBlock("new-quotes")}>New Quotes</p>
        </div>
      </header>
      {/* {count && <h2>hello world</h2>}
      {count2 && <h1>form</h1>} */}
    </div>
  );
};
