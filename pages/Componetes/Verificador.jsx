import React, { useState } from "react";

export default function VerificarParImpar() {
  const [numero, setNumero] = useState("");
  const [resultados, setResultados] = useState([]); 

  const verificarNumero = () => {
    const n = parseInt(numero);

    if (isNaN(n)) {
      alert("Por favor, ingresa un número válido.");
      return;
    }
    const resultado = n % 2 === 0 
      ? `El número ${n} es par.`
      : `El número ${n} es impar.`;

    setResultados([...resultados, resultado]);

    setNumero("");
  };

  return (
    <div>
      <h2>Ejercicio 4 </h2>

      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingresa un número"
      />

      <button onClick={verificarNumero}>Verificar</button>

      <h3>Resultados:</h3>
      <ul>
        {resultados.map((r, index) => (
          <li key={index}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
