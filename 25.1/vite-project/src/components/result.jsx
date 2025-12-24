import React, { Component } from "react";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { votes, stickers } = this.props;

    const maxVotes = Math.max(...votes);
    const winnerIndex = votes.indexOf(maxVotes);

    return (
      <div className="result">
        <h2>Результати голосування:</h2>
        <img src={stickers[winnerIndex]} alt="winner" width="150" />
        <p>Кількість голосів: {maxVotes}</p>
      </div>
    );
  }
}
export default Result;
