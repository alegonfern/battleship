import { Context } from "../store/context"
import { useContext } from "react"

//Este marcador muestra el puntaje de victorias del usuario y la CPU
function GlobalScore(){
    const { store } = useContext(Context);
  const { globalUser, globalCpu } = store;
    return(
        <div 
        className="border border-danger d-flex justify-content-around"
        style={{minWidth: "400px", maxWidth: "400px", background: "black", color: "white"}}>
            <h3> Jugador: {globalUser}</h3>
            <h3> Cpu: {globalCpu}</h3>         
        </div>
    )
}
export default GlobalScore;