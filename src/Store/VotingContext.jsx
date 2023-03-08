import { createContext, useState } from "react";

export const VotingContext = createContext();

export const VotingProvider = ({ children }) => {
  const [choice, setChoice] = useState(0);
  const [display, setDisplay] = useState("numerico");
  const [votes, setVotes] = useState({
    candidato1: 0,
    candidato2: 0,
    candidato3: 0,
    candidato4: 0,
    global: 0,
    voteWinner: function () {
      let maxVotes = 0;
      let winnerV = "";
      for (const prop in this) {
        console.log(prop)
        if (prop !== "global") {
          if (this[prop] > maxVotes) {
            maxVotes = this[prop];
            winnerV = prop;
          } else if (this[prop] === maxVotes) {
            winnerV = "empate";
          }
        }
      }
      return winnerV
    },
  });

  const handleVote = (candidate) => {
    setVotes({
      ...votes,
      [candidate]: votes[candidate] + 1,
      global: votes.global + 1,
    });
  };

  const handleChoice = (num) => {
    setChoice(num);
  };

  const handleDisplay = (dsp) => {
    setDisplay(dsp);
  };

  // const handleWinner()

  return (
    <VotingContext.Provider
      value={{
        votes,
        handleVote,
        choice,
        handleChoice,
        display,
        handleDisplay,
      }}
    >
      {children}
    </VotingContext.Provider>
  );
};
