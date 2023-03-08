import React, { useContext } from "react";
import { VotingContext } from "../Store/VotingContext";
import "../Styles/styles.css";

export default function GaleriaFiltros() {
  const store = useContext(VotingContext);
  return (
    <div className="vote-visualizer">
      <h1>Ver resultados por candidato:</h1>
      <div className="minifiltro">
        <button onClick={() => store.handleChoice(0)}>C1</button>
        <button onClick={() => store.handleChoice(1)}>C2</button>
        <button onClick={() => store.handleChoice(2)}>C3</button>
        <button onClick={() => store.handleChoice(3)}>C4</button>
      </div>
      <h1>FILTRAR POR:</h1>
      <button onClick={() => store.handleDisplay("numerico")}>
        Repartición numérica
      </button>
      <button onClick={() => store.handleDisplay("porcentual")}>
        Porcentajes
      </button>
    </div>
  );
}
