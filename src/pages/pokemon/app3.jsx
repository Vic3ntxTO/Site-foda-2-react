import React, { useState } from "react";

function P_App3() {
  class Pokemon {
    constructor(id, nome, tipo, spr, move1, move2, move3, move4) {
      this.id = id;
      this.nome = nome;
      this.tipo = tipo;
      this.spr = spr;
      this.move1 = move1;
      this.move2 = move2;
      this.move3 = move3;
      this.move4 = move4;
    }
  }

  const [pokemon, setPokemon] = useState(
    new Pokemon(0, "", "", "", "", "", "", "")
  );
  const [idPokemon, setIdPokemon] = useState("");

  const buscarPokemon = () => {
    const id = parseInt(idPokemon);
    if (id < 1 || id > 1025) {
      alert("Digite um número entre 1 e 1025 para encontrar um Pokémon.");
      return;
    }

    const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(
          new Pokemon(
            data.id,
            data.name,
            data.types[0]?.type.name || "",
            data.sprites.front_default,
            data.moves[0]?.move.name || "",
            data.moves[1]?.move.name || "",
            data.moves[2]?.move.name || "",
            data.moves[3]?.move.name || ""
          )
        );
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao buscar Pokémon");
      });
  };

  return (
    <div>
      <h1>Informações do Pokémon</h1>

      <input
        type="number"
        value={idPokemon}
        onChange={(e) => setIdPokemon(e.target.value)}
      />

      <button onClick={buscarPokemon}>Buscar</button>

      <h2>Pokémon: {pokemon.nome}</h2>
      {pokemon.spr && <img src={pokemon.spr} alt={pokemon.nome} />}
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

export default P_App3;