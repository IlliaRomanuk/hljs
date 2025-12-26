import React, { Component } from "react";
import "./App.css";
import Sticker from "./components/sticker";
import Button from "./components/button";
import Refresh from "./components/refresh";
const stickers = [
  "/stickers/free-sticker-bauble-9006705.png",
  "/stickers/free-sticker-bdsm-7357191.png",
  "/stickers/free-sticker-christmas-wreath-9006587.png",
  "/stickers/free-sticker-deer-9006657.png",
  "/stickers/free-sticker-snowball-9006614.png",
];
class App extends Component {
  constructor(props) {
    super(props);
    const saved = localStorage.getItem("votes");
    this.state = {
      votes: saved ? JSON.parse(saved) : Array(stickers.length).fill(0),
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.votes !== this.state.votes) {
      localStorage.setItem("votes", JSON.stringify(this.state.votes));
    }
  }
  vote = (index) => {
    const newVotes = [...this.state.votes];
    newVotes[index]++;
    this.setState({ votes: newVotes});
  };
  resetVotes = () => {
    this.setState({ votes: Array(stickers.length).fill(0) });
  };
  render() {
    return (
      <div>
        <h1 className="voting">Голосування за найкращий смайлик</h1>
        <ul className="list">
          {stickers.map((img, index) => (
            <li key={index}>
              <Sticker
                img={img}
                point={this.state.votes[index]}
                onVote={() => this.vote(index)}
              />
            </li>
          ))}
        </ul>
        <div className="buttons">
          <Refresh onReset={this.resetVotes} />
          <Button votes={this.state.votes} stickers={stickers} />
        </div>
      </div>
    );
  }
}
export default App;
