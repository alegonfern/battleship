import GameScore from "../components/gameScore";
import CpuBoard from "../components/cpuBoard";

//En este documento se genera la vista para el componente de la CPU acá se retorna la interfaz del juego del lado de la CPU
function GameShowBoard() {
  return (
    <div style={{ minHeight: "100vh" }} className="pt-5">
      <div className="container d-flex justify-content-center">
        <GameScore />
      </div>
      <CpuBoard />
    </div>
  );
}

export default GameShowBoard;
