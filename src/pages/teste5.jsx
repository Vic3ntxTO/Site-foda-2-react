import React from 'react';
import {useState} from "react";

function Teste5() {

  const [contador, setContador] = useState(0);
  const[numero, setNumero] = useState(0)
  return (
    <>
      <h1>UseState(estado)</h1>
      <h2>Contador usando state</h2>
      <h3>Contador: {contador}</h3>
      <button onClick={() => setContador(contador + 1)}> Adicionar</button>
      <button onClick={() => setContador(contador - 1)}> Subtrair</button>
      <button onClick={() => setContador(0)}> Resetar</button>
      Adicionar numero <input type="number" onChange={(e) => setNumero(Number(e.target.value))}/>
      <button onClick={() => setContador(contador + numero )}>add</button>
      <button onClick={() => setContador(numero)}>-</button>
      {contador >10000 && <p>Uau passou</p>}
    </>
  );
}

export default Teste5;