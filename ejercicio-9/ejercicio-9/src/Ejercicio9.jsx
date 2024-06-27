//9- A partir de un arreglo con datos de una persona (nombre, apellido, edad) realice una pagina que
//muestre el listado de personas con sus datos empleando <ul> y <li>.

//import { useState } from 'react'

export default function Ejercicio9() {
  // Datos de ejemplo
  const personas = [{ nombre: 'Juan', apellido: 'Pérez', edad: 25 },
    { nombre: 'María', apellido: 'Gómez', edad: 30 },
    { nombre: 'Carlos', apellido: 'Rodríguez', edad: 20 },
  ];

  return (
    <div className="App">
      <h1>Lista de Personas</h1>
      <ul>
        {personas.map((persona, indice) => (
          <li key={indice}>
            Nombre: {persona.nombre}, Apellido: {persona.apellido}, Edad: {persona.edad}
          </li>
        ))}
      </ul>
    </div>
  );
}