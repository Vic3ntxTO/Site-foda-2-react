import React from "react";
import { Outlet, Link } from "react-router-dom";

function Menu_p() {
  return (
    <>
      <div>
        <Link to="teste1">Teste 1</Link> <br></br>
        <Link to="teste2">Dinheiro gratis</Link><br></br>
        <Link to="teste3">Somar</Link><br></br>
        <Link to="teste4">Teste4</Link><br></br>
        <Link to="teste5">Teste5</Link><br></br>
        <Link to="teste6">Teste6</Link><br></br>
        <Link to="sigmaclicker">sigma clicker</Link><br></br>
        <Link to="aulaestranha">Aulaestranha</Link><br></br>
        <Link to="ex1">Ex1</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
export default Menu_p;
