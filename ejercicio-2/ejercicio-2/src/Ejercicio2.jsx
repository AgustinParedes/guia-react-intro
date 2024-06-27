//2- Realizar un programa en React con Vite que modifique el texto de un elemento <p> con el valor
//de un entrada <input> al presionar un botón <button>.

import { useState } from 'react'

export default function Ejercicio2() {
  const [entrada, setEntrada] = useState("");
  const [texto, setTexto] = useState("");

  const modificar = () => {
      setTexto(entrada);
  };

  return (
      <>
          <input value={entrada} onChange={(e) => setEntrada(e.target.value)}/>
          <button onClick={modificar}>Modificar</button>
          <p>Texto ingresado: {texto}</p>
      </>

  )
}