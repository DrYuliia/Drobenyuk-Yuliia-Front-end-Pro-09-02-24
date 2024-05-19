import React, { useState } from 'react';
import './App.css';

const emojis = ['😀', '😂', '😍', '😎', '😕'];

function App() {
  const [votes, setVotes] = useState(Array(emojis.length).fill(0));
  const [winner, setWinner] = useState(null);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  const showResults = () => {
    const maxVotes = Math.max(...votes);
    const winningIndex = votes.indexOf(maxVotes);
    setWinner(emojis[winningIndex]);
  };

  return (
    <div className="App">
      <h1>Emoji Voting</h1>
      <div className="emoji-list">
        {emojis.map((emoji, index) => (
          <div key={index} className="emoji-item">
            <span className="emoji" onClick={() => handleVote(index)}>{emoji}</span>
            <span className="votes">{votes[index]} votes</span>
          </div>
        ))}
      </div>
      <button onClick={showResults}>Show Results</button>
      {winner && <h2>Winner: {winner}</h2>}
    </div>
  );
}

export default App;
