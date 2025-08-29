import React from 'react';

function Ex1() {
  const mudarTexto = () => {
    const txt = document.getElementById('texto');
    const txt_conteudo = document.getElementById('texto2').value;
    txt.textContent = txt_conteudo;
  };

  return (
    <>
      <section>
        <article>
          <form id="contato" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="nome">Mudar texto</label><br />
            <input
              type="text"
              id="texto2"
              placeholder="Digite uma texto"
              maxLength="999"
              required
            />
          </form>
        </article>
      </section>

      <button onClick={mudarTexto}>
        Clique aqui para mudar o texto
      </button>

      <p id="texto">esse texto não sera mudado</p>
    </>
  );
}

export default Ex1;