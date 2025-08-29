import React from "react";
import { useEffect, useState} from "react";
import { data } from "react-router-dom";

function P_App1(){
  const [nome,setNome] = useState("");
  const [tipo,setTipo] = useState("");
  const [som, setSom] = useState("")
  const [nome2,setNome2] = useState("");
  const [tipo2,setTipo2] = useState("");
  const [nome3,setNome3] = useState("");
  const [tipo3,setTipo3] = useState("");
  const [atq,setAtq] = useState("");
  const [atq2,setAtq2] = useState("");
  const [atq3,setAtq3] = useState("");
  const [atq4,setAtq4] = useState("");
  const [img,setIMG] = useState("");
  const [img2,setIMG2] = useState("");
  const [img3,setIMG3] = useState("");
  

  useEffect(() => {
    const api = "https://pokeapi.co/api/v2/pokemon/9";
    const api2 = "https://pokeapi.co/api/v2/pokemon/8";
    const api3 = "https://pokeapi.co/api/v2/pokemon/7";

    fetch(api3)
    .then((res)=> res.json()) 
    .then((data) => {
      setNome3(data.name);
      setTipo3(data.types[0].type.name);
      setIMG3(data.sprites.front_default);
    
    });
      


    fetch(api2)
    .then((res)=> res.json()) 
    .then((data) => {
      setNome2(data.name);
      setTipo2(data.types[0].type.name);
      setIMG2(data.sprites.front_default);
      
     });
      
      



    fetch(api)
    .then((res) => res.json())
    .then((data) => {
      setNome(data.name);
      setTipo(data.types[0].type.name);
      setAtq(data.moves[1].move.name);
      setAtq2(data.moves[0].move.name);
      setAtq3(data.moves[12].move.name);
      setAtq4(data.moves[9].move.name);
      setIMG(data.sprites.front_default);
      setSom(data.cries.latest);

      
      
    
    });

  
  },[]);

  const tocarSom = () => {
    const audio = new Audio(som)
    audio.play();
  };

  


  return(
    <div>
      
      <h1>MELHOR INICIAL</h1>
      <h2>Pokémon: {nome3}</h2>
      <img src={img3}/>
      <h2>Pokémon: {nome2}</h2> 
      <img src={img2}/>
      <hr/>
      <h2>Pokémon: {nome}</h2>
      <img src={img}/> <br/>
      <button onClick={tocarSom}> Audio Pokemon {nome } </button> <br/>
      <h2>Tipo de todos/melhor os tipos ->{tipo}</h2>

      <h1> MOVES FODAS</h1>
      <h2>move1:{atq}</h2>
      <h2>move2:{atq2}</h2>
      <h2>move3:{atq3}</h2>
      <h2>move4:{atq4}</h2>
    </div>

  );
}

export default P_App1