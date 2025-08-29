import React from 'react';
import { useEffect, useState } from 'react';

function Teste6() {
  const [contador2,setContador] = useState(0);

  useEffect(() => {
    console.log('Estado inicial com sucesso!');
    const salvo = localStorage.getItem("contador")
    if (!isNaN(salvo)) setContador(parseInt(salvo));
  }, []);

  useEffect(() => {
    console.log('Contador mudou! Agora está: ',contado2r);
    document.title = `Você matou ${contador2} pessoa(s)`
    localStorage.setItem("contador",contador2)
  },[contador2]);
   
  return (
    <div>
      <h2>Teste de useEffect</h2>
      <button className='btn btn-success' onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
}

export default Teste6;