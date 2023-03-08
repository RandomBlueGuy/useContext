import React, { useContext } from "react";
import { VotingContext } from "../Store/VotingContext";
import "../Styles/styles.css";

function DespliegueInfo(props) {
  const specialChar = "=>";
  // const [count, setCount] = useState(0);
  const store = useContext(VotingContext);
  console.log(store);
  return (
    <div className="ctn2">
      <div className="general-vote-info">
      <p>C1 {specialChar} {store.votes.candidato1}</p>
      <p>C2 {specialChar} {store.votes.candidato2}</p>
      <p>C3 {specialChar} {store.votes.candidato3}</p>
      <p>C4 {specialChar} {store.votes.candidato4}</p>
        
      </div>
      <h1 style = {{display: store.display === 'numerico' ? 'flex' : 'none'}}>
        {Object.keys(store.votes)[store.choice]} {specialChar} &nbsp;&nbsp;
        <span>{Object.values(store.votes)[store.choice]} / {store.votes.global} votos</span>
      </h1>
      <h1 style = {{display: store.display === 'porcentual' ? 'flex' : 'none'}}>
        {Object.keys(store.votes)[store.choice]} {specialChar} &nbsp;&nbsp;
        <span>{((Object.values(store.votes)[store.choice] * 100) /store.votes.global).toFixed(0)}% del total de votos</span>
      </h1>
    </div>
  );
}

export default DespliegueInfo;
