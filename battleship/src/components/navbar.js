import { Link } from "react-router-dom";

//Creamos el componente NavBar para que el usuario pueda navegar las páginas sin tener que refrescar
function NavBar() {
  //Se crea la función para refrescar la página y reiniciar los contadores globales
  function handleClick() {
    window.location.reload();
  }
  return (
    <div className="container-fluid d-flex py-4 botonera">
      <div className="col-md-4 col-3 d-flex justify-content-start ">

        <button className="btn btn-dark">
          <Link to="/" style={{ textDecoration: "none",color: "white" }}>
            {" "}
            Inicio{" "}
          </Link>
        </button>



      </div>
      <div className="col-md-4 col-6 d-flex justify-content-between">
        <div className="col-5"><button className="btn btn-light border border-dark w-100">
          <Link to="/user" style={{ textDecoration: "none", color: "black"}}>
            Jugador
          </Link>
        </button></div>
        <div className="col-5 "><button className="btn btn-light border border-dark w-100">
          <Link to="/gameboard" style={{ textDecoration: "none", color: "black"}}>
            CPU
          </Link>
        </button></div>
        
      </div>
      <div className="col-md-4 col-3 d-flex justify-content-end">

        <button className="btn btn-dark">
          <Link onClick={handleClick} style={{ textDecoration: "none",color: "white" }}>
            {" "}
            Reiniciar{" "}
          </Link>
        </button>


      </div>
    </div>
  );
}
export default NavBar;
