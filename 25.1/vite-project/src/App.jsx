import { useState, useEffect } from "react";
import "./App.css";
import Sticker from "./components/sticker";
import Button from "./components/button";
import Refresh from "./components/refresh"
const stickers = [
  "/stickers/free-sticker-bauble-9006705.png",
  "/stickers/free-sticker-bdsm-7357191.png",
  "/stickers/free-sticker-christmas-wreath-9006587.png",
  "/stickers/free-sticker-deer-9006657.png",
  "/stickers/free-sticker-snowball-9006614.png",
];
function App() {
  const [votes, setVotes] = useState(() => {
    const saved = localStorage.getItem("votes");
    return saved ? JSON.parse(saved) : Array(stickers.length).fill(0);
  });
  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const vote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };
  const resetVotes = () => {
    setVotes(Array(stickers.length).fill(0));
  };
  return (
    <div>
      <h1 className="voting">Голосування за найкращий смайлик</h1>
      <ul className="list">


      {stickers.map((img, index) => (


        <li key={index}>
          <Sticker img={img} point={votes[index]} onVote={() => vote(index)} />
        </li>


         ))}
      </ul>
      <div className="buttons">
      <Refresh onReset={resetVotes}/>
      <Button votes={votes} stickers={stickers} />
      </div>
    </div>
  );
}

export default App;
