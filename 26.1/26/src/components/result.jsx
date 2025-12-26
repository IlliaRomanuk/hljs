function Result({ votes, stickers }) {
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

export default Result;
