import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teste1 from "./pages/teste1.jsx";
import Teste3 from "./pages/teste3.jsx";
import Teste2 from "./pages/teste2.jsx";
import Teste4 from "./pages/teste4.jsx";
import Teste6 from "./pages/teste6.jsx";
import Revelar from "./pages/revelar.jsx";
import Revelar2 from "./pages/revelar2.jsx";
import Ex1 from "./pages/ex1.jsx";
import Header from "./pages/header.jsx";
import MenuP from "./pages/menu_p.jsx";
import Piadas from "./pages/piadas.jsx";
import Teste5 from "./pages/teste5.jsx";
import Sigmaclicker from "./pages/sigmaclicker.jsx";
import Aulaestranha from "./pages/aulaestranha.jsx";

import Pokemon from "./pages/pokemon/menu.jsx";
import P_Teste from "./pages/pokemon/teste.jsx";
import P_App1 from "./pages/pokemon/app1.jsx";
import P_App2 from "./pages/pokemon/app2.jsx";
import PokemonC from "./pages/pokemon/pokemonc.jsx";
import P_App3 from "./pages/pokemon/app3.jsx";




export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h2>Oi</h2>} />

          <Route path="/menup" element={<MenuP />}>
            <Route path="teste1" element={<Teste1 />} />
            <Route path="teste2" element={<Teste2 />} />
            <Route path="teste3" element={<Teste3 />} />
            <Route path="teste4" element={<Teste4 />} />
            <Route path="teste5" element={<Teste5 />} />
            <Route path="teste6" element={<Teste6 />} />
            <Route path="sigmaclicker" element={<Sigmaclicker />} />
            <Route path="Aulaestranha" element={<Aulaestranha />} />
            <Route path="ex1" element={<Ex1 />} />
          </Route>
          <Route path="/piadas" element={<Piadas />}>
            <Route path="revelar" element={<Revelar />} />
            <Route path="revelar2" element={<Revelar2 />} />
          </Route>
          <Route path="pokemon" element={<Pokemon/>}>
            <Route path="teste" element={<P_Teste />} />
            <Route path="app1" element={<P_App1 />} />
            <Route path="app2" element={<P_App2 />} />
            <Route path="app3" element={<P_App3 />} />
            <Route path="pokemonc" element={<PokemonC />} />
            
            

          </Route>

          <Route path="*" element={<h2> ERRO OTARIO</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
