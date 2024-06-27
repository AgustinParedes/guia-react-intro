//1- Empleando React con Vite, realice un programa que permita incrementar o decrementar un
//número en pantalla cuando el usuario haga click en los botones incrementar y decrementar.

import { useState } from 'react'

export default function Ejercicio1() {
  // hook useState: manejar estados
  const [cuenta, setCuenta] = useState(0);

  const incrementar = () => {
    setCuenta(cuenta + 1);
  };

  return (
      <>
        <p>{cuenta}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={() => setCuenta(cuenta - 1)}>Decrementar</button>
      </>
    );
  }
