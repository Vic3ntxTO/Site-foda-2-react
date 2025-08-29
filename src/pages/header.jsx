import * as React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1> S I T E - F O D A 2</h1>
        <h2>seja bem vindo ao site foda pois esse site é foda</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/B2ElZK0u85Y?si=bXfbDdkmE2KM4dQP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </header>
      <nav>
        <Link to='/menup'>Menu Principal</Link>
        <Link to='/piadas'>Piadas</Link>
        <Link to='/pokemon'> Pokemon </Link>
      </nav>
    </>
  );
}
export default Header;
