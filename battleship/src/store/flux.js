import Swal from "sweetalert2";

const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      userShip: [],
      userFires: [],
      userScore: 0,
      globalUser: 0,
      cpuShip: [],
      cpuFires: [],
      cpuScore: 0,
      globalCpu: 0,
    },
    actions: {
      //Desde este punto el usuario posiciona su flota
      setUserShip: (id, navigate) => {
        const { userShip } = getStore();
        //Se crea una condición para que no se puedan ingresar más de 16 espacios en el tablero
        if (userShip.length === 16) {
          Swal.fire("¡Ya tienes tus naves wey!")
        }
        //Se crea una condición para que no se pueda ingresar 2 veces la misma ubicación
        else {if (userShip.includes(id)) {
          Swal.fire({
            icon: "warning",
            title: "Casilla ya registrada",
            showConfirmButton: false,
            timer: 1500,
          });
        } 
        //Una vez se alcanzan los 16 se notifica al usuario por una alerta y pasa a la ventana de juego
        else {
          const updatedShip = [...userShip, id];
          setStore({ userShip: updatedShip });
          if (updatedShip.length === 16) {
            Swal.fire({
              icon: "success",
              title: "Flota lista",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/gameboard");
            //Una vez el usuario define sus posiciones, llamamos la función serCpuShip para que se definan automáticamente las posiciones de la CPU
            getActions().setCpuShip();
          }
        }}
        
      },
      //En este punto la CPU genera su flota de manera aleatoria
      setCpuShip: () => {
        const { cpuShip } = getStore();
        //Se crea un ciclo FOR para generar las 5 naves de la CPU
        for (let i = 0; i < 5; i++) {
          //Para la primera nave generamos aleatoriamente una posición concatenando una fila y una columna
          if (i === 0) {
            const row = Math.floor(Math.random() * 9) + 1;
            const col = Math.floor(Math.random() * 8) + 1;
            const position = row.toString() + col.toString();
            //Luego de crear la primera posición, creamos inmediatamente una segunda en la columna siguiente
            let position2 = row.toString() + (col + 1).toString();
            cpuShip.push(position);
            cpuShip.push(position2);
            //Se crea el segundo ciclo para la segunda nave utilizando la misma metodología
          } else if (i === 1) {
            let row = Math.floor(Math.random() * 7) + 1;
            let col = Math.floor(Math.random() * 9) + 1;
            let position = row.toString() + col.toString();
            let position2 = (row + 1).toString() + col.toString();
            let position3 = (row + 2).toString() + col.toString();
            //Generamos posiciones aleatorias hasta que no se repitan dentro de las ubicaciones actuales
            while (
              cpuShip.includes(position) ||
              cpuShip.includes(position2) ||
              cpuShip.includes(position3)
            ) {
              row = Math.floor(Math.random() * 7) + 1;
              col = Math.floor(Math.random() * 9) + 1;
              position = row.toString() + col.toString();
              position2 = (row + 1).toString() + col.toString();
              position3 = (row + 2).toString() + col.toString();
            }

            cpuShip.push(position);
            cpuShip.push(position2);
            cpuShip.push(position3);
            //Se crea el tercer ciclo para la tercera nave utilizando la misma metodología
          } else if (i === 2) {
            let row = Math.floor(Math.random() * 9) + 1;
            let col = Math.floor(Math.random() * 7) + 1;
            let position4 = row.toString() + col.toString();
            let position5 = row.toString() + (col + 1).toString();
            let position6 = row.toString() + (col + 2).toString();
            //Generamos posiciones aleatorias hasta que no se repitan dentro de las ubicaciones actuales
            while (
              cpuShip.includes(position4) ||
              cpuShip.includes(position5) ||
              cpuShip.includes(position6)
            ) {
              row = Math.floor(Math.random() * 9) + 1;
              col = Math.floor(Math.random() * 7) + 1;
              position4 = row.toString() + col.toString();
              position5 = row.toString() + (col + 1).toString();
              position6 = row.toString() + (col + 2).toString();
            }

            cpuShip.push(position4);
            cpuShip.push(position5);
            cpuShip.push(position6);
            //Se crea el cuarto ciclo para la cuarta nave utilizando la misma metodología
          } else if (i === 3) {
            let row = Math.floor(Math.random() * 6) + 1;
            let col = Math.floor(Math.random() * 9) + 1;
            let position7 = row.toString() + col.toString();
            let position8 = (row + 1).toString() + col.toString();
            let position9 = (row + 2).toString() + col.toString();
            let position10 = (row + 3).toString() + col.toString();
            //Generamos posiciones aleatorias hasta que no se repitan dentro de las ubicaciones actuales
            while (
              cpuShip.includes(position7) ||
              cpuShip.includes(position8) ||
              cpuShip.includes(position9) ||
              cpuShip.includes(position10)
            ) {
              row = Math.floor(Math.random() * 7) + 1;
              col = Math.floor(Math.random() * 9) + 1;
              position7 = row.toString() + col.toString();
              position8 = (row + 1).toString() + col.toString();
              position9 = (row + 2).toString() + col.toString();
              position10 = (row + 3).toString() + col.toString();
            }

            cpuShip.push(position7);
            cpuShip.push(position8);
            cpuShip.push(position9);
            cpuShip.push(position10);
            //Se crea el quinto ciclo para la quinta nave utilizando la misma metodología
          } else {
            let row = Math.floor(Math.random() * 9) + 1;
            let col = Math.floor(Math.random() * 6) + 1;
            let position11 = row.toString() + col.toString();
            let position12 = row.toString() + (col + 1).toString();
            let position13 = row.toString() + (col + 2).toString();
            let position14 = row.toString() + (col + 3).toString();
            //Generamos posiciones aleatorias hasta que no se repitan dentro de las ubicaciones actuales
            while (
              cpuShip.includes(position11) ||
              cpuShip.includes(position12) ||
              cpuShip.includes(position13) ||
              cpuShip.includes(position14)
            ) {
              row = Math.floor(Math.random() * 9) + 1;
              col = Math.floor(Math.random() * 6) + 1;
              position11 = row.toString() + col.toString();
              position12 = row.toString() + (col + 1).toString();
              position13 = row.toString() + (col + 2).toString();
              position14 = row.toString() + (col + 3).toString();
            }

            cpuShip.push(position11);
            cpuShip.push(position12);
            cpuShip.push(position13);
            cpuShip.push(position14);
          }
        }
      },
      //En esta función se definen los pasos para "lanzar nuestros misiles"
      fireTorpedo: (id, navigate) => {
        const element = document.getElementById(id);
        const { cpuShip, userScore, userFires, globalUser } = getStore();
        //Validamos para que el usuario no pueda repetir la casilla seleccionada
        if (userFires.includes(id)) {
          Swal.fire({
            icon: "warning",
            title: "Ya registrada!",
            showConfirmButton: false,
            timer: 1000,
          });
        }
        //En caso que la casilla no se repita, incluimos el valor en la variable userFires
        else {
          setStore({
            userFires: [...userFires, id],
          });
          //Verificamos si es que la posición coincide con una nave enemiga
          if (cpuShip.includes(id)) {
            setStore({
              userScore: userScore + 1
            });
            let value = userScore + 1;
            //Si el usuario llega a los 16 puntos, se genera la alerta de ganador, se retorna a inicio y se ejecuta la función isWinner
            if (value === 16) {
              Swal.fire({
                icon: "success",
                title: "Ganaste!",
                showConfirmButton: false,
                timer: 1500,
              });
              setStore({
                globalUser: globalUser + 1,
              });
              getActions().isWinner(navigate);
            }
            //En caso de no llegar a los 16 puntos, se ejecuta la función para que la CPU arroje su misil
            else{
              getActions().cpuFire(navigate)
            }
            //Si el usuario no acierta con la nave enemiga, pintamos el DIV seleccionado y ejecutamos cpuFire
          } else {
            element.classList.add("bg-info");
            getActions().cpuFire(navigate)
          }
        }
      },
      //La función isWinner se ejecuta cuando el usuario o la CPU llegan a 16 puntos, reseteamos la store y volvemos a inicio
      isWinner: (navigate) => {
        setStore({
          userShip: [],
          userFires: [],
          cpuShip: [],
          userScore: 0,
          cpuScore: 0,
          cpuFires: [],
        });
        navigate("/");
      },
      newGame:(navigate)=>{
        setStore({
          userShip: [],
          userFires: [],
          cpuShip: [],
          userScore: 0,
          cpuScore: 0,
          cpuFires: [],
        });
        navigate("/user");
      },
      //A continuación se presenta la función para definir los misiles de la CPU
      cpuFire: (navigate) => {
        const { userShip, cpuFires, cpuScore, globalCpu } = getStore();
        let position = "";

        // Generamos una posición aleatoria mientras no se repita en las ya ingresadas  
        do {
          const row = Math.floor(Math.random() * 9) + 1;
          const col = Math.floor(Math.random() * 9) + 1;
          position = row.toString() + col.toString();
        } while (cpuFires.includes(position));

        // Almacenamos la posición elegida en la store
        const updatedCpuFires = [...cpuFires, position];
        setStore({
          cpuFires: updatedCpuFires,
        });
        //Si la CPU acierta su misil, notificamos al usuario y se suma un punto al marcador de la CPU
        if (userShip.includes(position)) {

          Swal.fire({
            icon: "warning",
            title: "¡La CPU te dió!",
            showConfirmButton: false,
            timer: 1000,
          });

          setStore({
            cpuScore: cpuScore + 1,
          });
          let value = cpuScore + 1;
          //Si la CPU llega a los 16 puntos, notificamos al usuario de la derrota, y llamamos a la función isWinner
          if (value === 16) {
            Swal.fire({
              icon: "error",
              title: "¡Perdiste!",
              showConfirmButton: false,
              timer: 1500,
            });
            setStore({
              globalCpu: globalCpu + 1,
            });
            getActions().isWinner(navigate);
          }
          //En caso de que la CPU falle, se notifica al usuario y se continúa el juego
        } else {
          Swal.fire({
            icon: "warning",
            title: "¡La Cpu falló!",
            showConfirmButton: false,
            timer: 1000,
          });}
      },
    },
  };
};

export default getState;
