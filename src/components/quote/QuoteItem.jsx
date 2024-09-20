import React from "react";
import "./QuoteStyle.css";
import Button from "../UI/Button";
export const QuoteItem = ({ title, name }) => {
  return (
    <li className="list-quote">
      <div className="dd">
        <div className="div-con">
          <p className="p1">{title}</p>
          <p className="p2">{name}</p>
        </div>
        <div className="btn">
          <Button>View FullScreen</Button>
        </div>
      </div>
    </li>
  );
};
