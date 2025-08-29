import React from "react";
import { Outlet, Link } from "react-router-dom";

function Piadas() {
  return (
    <>
      <div>
        <h1>Humor</h1>
        <p>O que o tubarão disse quando comeu o peixe-palhaço?</p>
        <Link to="revelar">Revelar</Link>
        <h1>Biologia</h1>
        <p>Por que os pássaros voam para o sul?</p>
        <Link to="revelar2">Revelar</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
export default Piadas;
