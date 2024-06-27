//5- Empleando dos listas desplegables con <select>, realizar un programa en React que modifique el
//color de texto y el color de fondo de un elemento <p>.

import { useState } from 'react'

export default function Ejercicio5() {
  const [textColor, setTextColor] = useState("black");
  const [bgColor, setbgColor] = useState("white");

  const colors = ['black', 'red', 'blue', 'green', 'yellow', 'pink', 'purple', 'white'];

  return (
      <>
      <div>
          <div>
              <h1>Cambiando color de Palabra y su Fondo</h1>
          </div>
          <label>
              Color de texto:
              <select value={textColor} onChange={(e) => setTextColor(e.target.value)}>
                  {colors.map((color) => (
                      <option key = {color} value={color}>
                          {color}
                          <color/>
                      </option>
                  ))}
              </select>
          </label>
      </div>
      
          <div>
          <label>
              Color de Fondo:
              <select value={bgColor} onChange={(e) => setbgColor(e.target.value)}>
                  {colors.map((color) => (
                      <option key = {color} value={color}>
                          {color}
                      </option>
                  ))}
              </select> 
          </label>

          </div>
      <p style={{ color: textColor, backgroundColor: bgColor, padding: '10px' }}>
          Este va a ser el texto que se va a modificar de color la letra y su fondo.
      </p>
              
      </>
           );
}
