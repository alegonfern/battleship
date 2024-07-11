import GameScore from "../components/globalScore";
import Board from "../components/userBoard";

//Creamos la vista que renderiza el tablero del usuario, en este tablero se renderizarán las posiciones elegidas por la CPU para los misiles
function UserBoard() {
 
  return (
    <div className="pt-5 pb-4" style={{ height: "100vh" }}>
      <h3 className="text-white text-center">¡Coloca tus naves en posición!</h3>
      <div className="container d-flex justify-content-center">
        <GameScore />
      </div>
      <Board />
    </div>
  );
}

export default UserBoard;