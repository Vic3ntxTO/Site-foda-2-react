import React from "react";
import { Outlet, Link,} from "react-router-dom";

function Pokemon(){
  return(
    <>
      <div>
        <Link to ="teste">Teste de API</Link>
        <Link to ="app1">APP1</Link>
        <Link to ="app2">APP2</Link>
        <Link to ="app3">APP3</Link>
        <Link to ="pokemonc">pokemoncassino</Link>

        
      </div>
      <hr/>
      <Outlet/>
    </>
  )
}
export default Pokemon;