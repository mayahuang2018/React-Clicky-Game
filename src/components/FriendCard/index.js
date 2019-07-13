import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <span onClick={() => props.imageClick(props.id)} className="imageClick">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      </span>
    </div>
  );
}

export default FriendCard;
