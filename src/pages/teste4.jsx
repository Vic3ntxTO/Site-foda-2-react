import React from 'react';

function Teste4() {
  
  const mudartexto = () => {
    const txt = document.getElementById('texto');
    let txt_conteudo = prompt("Escreva uma frase");
    txt.textContent = txt_conteudo;
    }
  
  
  return(
    <> 
      <button onClick={mudartexto}>Clique aqui para mudar o texto</button>
      <p id = "texto">esse texto não sera mudado</p>
    </>
  
  
  );
}
export default Teste4