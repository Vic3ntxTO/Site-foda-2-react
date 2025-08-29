import React, { useEffect, useState } from "react";

function P_App2() {
  class Pokemon {
    constructor(id, nome, tipo, spr, som, move1, move2, move3, move4) {
      this.id = id;
      this.nome = nome;
      this.tipo = tipo;
      this.spr = spr;
      this.som = som;
      this.move1 = move1;
      this.move2 = move2;
      this.move3 = move3;
      this.move4 = move4;
    }
    tocarSom() {
      if (this.som) {
        const audio = new Audio(this.som);
        audio.volume = 0.1
        audio.play();
      }
    }
  }

  const [pokemon, setPokemon] = useState(
    new Pokemon(0, "", "", "", "", "", "", "", "")
  );

  const [idGerado, setIdGerado] = useState(0);

  const gerarPokemon = () => {
    let id = Math.floor(Math.random() * 1025) + 1;
    setIdGerado(id);
  };

  useEffect(() => {
    gerarPokemon();
  }, []);

  useEffect(() => {
    if (idGerado === 0) return;

    const api = `https://pokeapi.co/api/v2/pokemon/${idGerado}`;
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(
          new Pokemon(
            data.id,
            data.name,
            data.types[0]?.type.name || "",
            data.sprites.front_default,
            data.cries?.latest || "",
            data.moves[0]?.move.name || "",
            data.moves[1]?.move.name || "",
            data.moves[2]?.move.name || "",
            data.moves[3]?.move.name || ""
          )
        );
      });
  }, [idGerado]);

  return (
    <div>
      <h1>Informações do Pokémon</h1>

      <button onClick={gerarPokemon}>Gerar Pokémon Aleatório</button>

      <h2>Pokémon: {pokemon.nome}</h2>
      <p>
        <img src={pokemon.spr} alt={pokemon.nome} />
        <br />
        {pokemon.som && (
          <button onClick={() => pokemon.tocarSom()}>
            Grito do(a) {pokemon.nome}
          </button>
        )}
      </p>
      <ul>
        <li>ID: {pokemon.id}</li>
        <li>Tipo: {pokemon.tipo}</li>
      </ul>
      <hr />
      <h3>Moves Iniciais</h3>
      <ul>
        <li>{pokemon.move1}</li>
        <li>{pokemon.move2}</li>
        <li>{pokemon.move3}</li>
        <li>{pokemon.move4}</li>
      </ul>
    </div>
  );
}

export default P_App2;