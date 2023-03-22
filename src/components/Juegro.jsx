import React from 'react'
import { useState } from 'react';


function Juegro() {

    const [maquina, setMaquina] =useState("");
    const [human, setHuman] =useState("");


    let options =['Piedra', 'Papel', 'Tijera']
    


    function ChangeMachine(){
      let Randommachine = Math.round(Math.random()*2);
      setMaquina(options[Randommachine]);
      usuarioganador()
    }


    function juegoHuman(e){
      //console.log(e.target.innerText)
      setHuman(e.target.innerText)

      ChangeMachine()
    }

    function usuarioganador() {
      if (human === maquina) {
        alert("Empate");
      } else if (
        (human === "Piedra" && maquina === "Tijera") ||
        (human === "Papel" && maquina === "Piedra") ||
        (human === "Tijera" && maquina === "Papel")
        
      ) {
        alert("¡Le Ganaste a la maquina!");
      } else {
        alert("¡Gano la maquina,Perdiste!");
      }
    }

    return (
        <div className='App'>
            <div>
                <p>Maquina</p>
                <h1>{maquina}</h1>
            </div>
            <hr />
            <div>
                <p>Human</p>
                <h1 style={{ color: 'red' }}>{human}</h1>
            </div>
            <div>
                <button onClick={juegoHuman}>Piedra</button>
                <button onClick={juegoHuman}>Papel</button>
                <button onClick={juegoHuman}>Tijera</button>
                
            </div>
        </div>
    )
}

export default Juegro