import React, {useContext} from "react";
import "../Styles/styles.css";
import { VotingContext } from "../Store/VotingContext";

function TotalVotos() {
  const store = useContext(VotingContext);
  return (
    <div className="ctn1">
      <h1>TOTAL VOTOS:&nbsp;&nbsp;<span>{store.votes.global}</span></h1>
      <h2>Candidato a la cabeza: &nbsp;&nbsp;&nbsp;&nbsp;<span>{store.votes.voteWinner()} </span></h2>
    </div>
  );
}

export default TotalVotos;
