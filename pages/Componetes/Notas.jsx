import React from "react";

export default function Promedio() {
  const nombre = "Juan";
  const nota1 = 4.2;
  const nota2 = 3.8;
  const nota3 = 3.4;

  const promedio = ((nota1 + nota2 + nota3) / 3).toFixed(2);
  const resultado = promedio >= 3.5 ? "Aprobó ✅" : "No aprobó ❌";

  return (
    <div>
      <h2>Ejercicio 2</h2>
      <p>Estudiante: {nombre}</p>
      <p>Notas: {nota1}, {nota2}, {nota3}</p>
      <p>Promedio: {promedio}</p>
      <p>Resultado: {resultado}</p>
    </div>
  );
}
