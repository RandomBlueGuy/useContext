import React, { Context } from "react";
import "./Styles/styles.css";
import Candidato from "./Components/Candidato";
import GaleriaFiltros from "./Components/GaleriaFiltros";
import TotalVotos from "./Components/TotalVotos";
import DespliegueInfo from "./Components/DespliegueInfo";
import { VotingProvider } from "./Store/VotingContext";

function App() {
  const candidatosArr = [
    "candidato1",
    "candidato2",
    "candidato3",
    "candidato4",
  ];

  //   const [votos, setVotos] = useState({
  //     candidato1: 0,
  //     candidato2: 0,
  //     candidato3: 0,
  //     candidato4: 0,
  //   });

  return (
    <VotingProvider>
      <div className="stuff">
        <main className="max-ctn">
          <section className="candidates-ctn">
            {candidatosArr.map((candidato) => {
              return (
                <Candidato
                  name={candidato}
                  key={Number(candidato[candidato.length - 1])}
                />
              );
            })}
          </section>
          <section className="display-info">
            <GaleriaFiltros />
            <div className="votes-ctn">
              <TotalVotos />
              <DespliegueInfo />
            </div>
          </section>
        </main>
      </div>
    </VotingProvider>
  );
}

export default App;
