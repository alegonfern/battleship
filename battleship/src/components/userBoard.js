import React from "react";
import { useContext, useEffect  } from "react";
import { useNavigate } from 'react-router-dom'
import { Context } from "../store/context";
import "./setBoard.css";

//Generamos la table de juego del usuario
const Board = () => {

  const { store, actions } = useContext(Context);
  const {userShip, cpuFires} = store


  const navigate = useNavigate();

  //Se crea un useEffect para renderizar el componente a medida que el usuario define sus naves
  useEffect(() => {
    userShip.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.add("bg-warning");
      }
    });
  }, [userShip]);

  //Se crea un useEffect para renderizar el componente cuando la CPU haga su jugada
  useEffect(() => {
    cpuFires.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        if (userShip.includes(id)) {
          element.classList.add("bg-danger");
        } else {
          element.classList.add("bg-info");
        }
      }
    });
  }, [cpuFires]);

  return (
    <div
      className="container d-flex border border-danger shadow-lg"
      id="board"
    > 
      <div className="row">
        <div className="col border bg-primary"></div>
        <div className="col border bg-primary text-white">1</div>
        <div className="col border bg-primary text-white">2</div>
        <div className="col border bg-primary text-white">3</div>
        <div className="col border bg-primary text-white">4</div>
        <div className="col border bg-primary text-white">5</div>
        <div className="col border bg-primary text-white">6</div>
        <div className="col border bg-primary text-white">7</div>
        <div className="col border bg-primary text-white">8</div>
        <div className="col border bg-primary text-white">9</div>
      </div>
      <div className="row">
        <div className="col border bg-primary text-white">1</div>
        <div
          className="col border"
          id="11"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="12"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="13"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="14"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="15"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="16"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="17"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="18"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="19"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">2</div>
        <div
          className="col border"
          id="21"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="22"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="23"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="24"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="25"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="26"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="27"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="28"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="29"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">3</div>
        <div
          className="col border"
          id="31"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="32"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="33"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="34"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="35"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="36"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="37"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="38"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="39"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">4</div>
        <div
          className="col border"
          id="41"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="42"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="43"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="44"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="45"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="46"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="47"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="48"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="49"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">5</div>
        <div
          className="col border"
          id="51"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="52"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="53"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="54"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="55"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="56"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="57"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="58"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="59"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">6</div>
        <div
          className="col border"
          id="61"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="62"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="63"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="64"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="65"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="66"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="67"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="68"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="69"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">7</div>
        <div
          className="col border"
          id="71"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="72"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="73"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="74"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="75"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="76"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="77"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="78"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="79"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">8</div>
        <div
          className="col border"
          id="81"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="82"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="83"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="84"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="85"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="86"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="87"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="88"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="89"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">9</div>
        <div
          className="col border"
          id="91"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="92"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="93"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="94"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="95"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="96"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="97"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="98"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
        <div
          className="col border"
          id="99"
          onClick={(e) => actions.setUserShip(e.target.id, navigate)}
        ></div>
      </div>
    </div>
  );
};

export default Board;
