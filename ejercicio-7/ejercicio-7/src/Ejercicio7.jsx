//7- A partir de un arreglo con nombres de personas realizar un programa en React que genere el
//listado de nombres empleando <ul> y <li>

import { useState } from 'react'

export function Ejercicio7() {
  const [personas] = useState(["Pepe", "Maria", "Juan", "Pedro", "Cacho"]);

  return (
    <>
      <h1>Listado de personas</h1>
      <ol>
        {personas.map((persona, index) => {
          return <li key={index}>{persona}</li>;
        })}
      </ol>
    </>
  );
}