import React from "react";
import "./../styles/card.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{ width: props.width ? props.width : "100%" }}
      {...props}
    >
      {props.children}
    </div>
  );
}
export default Card;
