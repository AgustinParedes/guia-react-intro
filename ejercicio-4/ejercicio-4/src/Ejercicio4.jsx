//4- Escriba un programa en React con Vite que a partir de dos entradas numéricas (base, altura)
//calcule y muestre como una alerta el perímetro o superficie de un rectángulo. Emplear un botón
//para el perímetro y otro para la superficie

import { useState } from 'react'


export default function Ejercicio4() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");

  const calcularPerimetro = () => {
      const perimetro = 2 * (parseFloat(base) + parseFloat(height));
      alert(`La superficie del rectángulo es: ${perimetro}`)
  };

  const calcularArea = () => {
      const area = parseFloat(base) * parseFloat(height);
      alert(`La superficie del triángulo es: ${area}`)
  };

  return (
      <div>
        <h1>Calculadora de Rectángulos</h1>
        <div>
          <label>
            Base:
            <input
              type="number"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              
            />
          </label>
          <label>
            Altura:
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              
            />
          </label>
        </div>
        <div>
          <button onClick={calcularPerimetro} style={{ marginRight: '10px' }}>
            Calcular Perímetro
          </button>
          <button onClick={calcularArea}>Calcular Superficie</button>
        </div>
      </div>
    );
  }
  
 