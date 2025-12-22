import React, { Component } from "react";

class Sticker extends Component {
  render() {
    const { img, point, onVote } = this.props;
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
}

export default Sticker;
