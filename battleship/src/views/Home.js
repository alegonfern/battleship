import GameScore from "../components/globalScore";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/context";
import { useContext } from "react";

//El componente Home nos muestra los marcadores globales y la opción de iniciar la nueva partida
function Home() {
  const {actions} = useContext(Context)
  const navigate = useNavigate();
  return (
    <div className="pt-5 pb-4" style={{ height: "100vh" }}>
      <div className="container d-flex justify-content-center pt-5">
        <h1>BATTLEFIELD</h1>
      </div>
      <div className="container d-flex justify-content-center pt-5">
        <GameScore />
      </div>
      <div className="container d-flex justify-content-center pt-5">
        <button 
        onClick={() => actions.newGame(navigate)}
        className="btn btn-dark">
          Nueva Partida
        </button>
      </div>
    </div>
  );
}

export default Home;
