import React from 'react';
import { useEffect, useState } from 'react';

function PokemonC() {
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
        audio.volume = 0.05;
        audio.play();
      }
    }
  }

  const [pokemons, setPokemons] = useState([
    new Pokemon(0, "", "", "", "", "", "", "", ""),
    new Pokemon(0, "", "", "", "", "", "", "", ""),
    new Pokemon(0, "", "", "", "", "", "", "", "")
  ]);

  // Função que gera um ID de Pokémon
  const gerarIdPokemon = () => Math.floor(Math.random() * 151) + 1;

  // Busca os dados de um Pokémon
  const buscarPokemon = async (id) => {
    const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(api);
    const data = await res.json();

    return new Pokemon(
      data.id,
      data.name,
      data.types[0]?.type.name || "",
      data.sprites.front_default,
      data.cries?.latest || "",
      data.moves[0]?.move.name || "",
      data.moves[1]?.move.name || "",
      data.moves[2]?.move.name || "",
      data.moves[3]?.move.name || ""
    );
  };

  // Gera 3 pokémons aleatórios
  const gerarPokemons = async () => {
    const novosPokemons = await Promise.all([
      buscarPokemon(gerarIdPokemon()),
      buscarPokemon(gerarIdPokemon()),
      buscarPokemon(gerarIdPokemon())
    ]);
    setPokemons(novosPokemons);
  };

  // Quando abrir a página, já gera uma vez
  useEffect(() => {
    gerarPokemons();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pokémon Cassino</h1>
      <button onClick={gerarPokemons}>Gerar Pokémon Aleatório</button>

      {/* 3 pokémons lado a lado */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {pokemons.map((poke, index) => (
          <div
            key={index}
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              padding: "10px",
              width: "150px",
              background: "#f9f9f9"
            }}
          >
            <h2>{poke.nome}</h2>
            <img src={poke.spr} alt={poke.nome} />
            <br />
            {poke.som && (
              <button onClick={() => poke.tocarSom()}>Grito</button>
            )}
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>ID: {poke.id}</li>
              <li>Tipo: {poke.tipo}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PokemonC;