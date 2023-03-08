import React, { useContext } from "react";
import "../Styles/styles.css";
import candidateImg from "../assets/aaa.png";
import { VotingContext } from "../Store/VotingContext";

function Candidato(props) {
  // const [count, setCount] = useState(0);
  // let counterContext = useContext(VotingContext);
  const store = useContext(VotingContext);

  return (
    <article
      className="candidate-card"
      style={{
        color:
          store.votes.voteWinner() === props.name
            ? "rgba(255, 217, 0, 0.445)"
            : "rgba(111, 111, 200, 0.445)",
      }}
    >
      <img src={candidateImg} alt="" />
      <div className="candidate-name">
        <button
          value={props.key}
          onClick={() => {
            store.handleVote(props.name);
          }}
          style={{
            background:
              store.votes.voteWinner() === props.name
                ? "rgb(215, 220, 122)"
                : "rgb(254, 255, 240)",
          }}
        >
          VOTAR X {props.name}
        </button>
      </div>
    </article>
  );
}

export default Candidato;
