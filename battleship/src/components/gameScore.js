import { Context } from "../store/context"
import { useContext } from "react"

//Este marcador nos muestra los puntajes de la partida en curso
function GameScore(){
    const { store } = useContext(Context);
  const { userScore, cpuScore } = store;
    return(
        <div 
        className="border border-danger d-flex justify-content-around"
        style={{minWidth: "400px", maxWidth: "400px", background: "black", color: "white"}}>
            <h3> Jugador: {userScore}</h3>
            <h3> Cpu: {cpuScore}</h3>         
        </div>
    )
}
export default GameScore;