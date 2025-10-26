import React from "react";

export default function ParesImpares() {
  const pares = [];
  const impares = [];

  for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) pares.push(i);
    else impares.push(i);
  }

  return (
    <div>
      <h2>Ejercicio 3</h2>
      <p>Pares  : {pares.join(" /  ")}</p>
      <p>Impares :   {impares.join(" //  ")}</p>
    </div>
  );
}
