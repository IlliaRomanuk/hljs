import React, { Component } from "react";
function Sticker({ img, point, onVote }) {
  return (
    <div>
      <img
        src={img}
        alt="sticker"
        width="150"
        onClick={onVote}
        style={{ cursor: "pointer" }}
      />
      <p>{point}</p>
    </div>
  );
}

export default Sticker;
