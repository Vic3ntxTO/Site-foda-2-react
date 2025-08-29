import React, { useEffect, useState } from 'react';

function Sigmaclicker() {
  
  

  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(100000000000000000000);

  const [precoP, setPrecoP] = useState(10);
  const [qtdPlatao, setQtdPlatao] = useState(0);

  const [precoA, setPrecoA] = useState(200);
  const [qtdAristoteles, setQtdAristoteles] = useState(0);

  const [precoAr, setPrecoAr] = useState(1250);
  const [qtdarquimedes, setQtdarquimedes] = useState(0);
  //Upgrade Platão
  const [upPlatão, setupPlatão] = useState(1);
  const [precoupPlatão, setprecoupPlatão] = useState(200);
  const [addNumeroPlatão, setaddNumeroPlatão] = useState(1);
  //Upgrade Aristoteles
  const [upA, setupA] = useState(15);
  const [precoupA, setprecoupA] = useState(2250);
  const [addNumeroA, setaddNumeroA] = useState(15);
  //Upgrade Aristoteles
  const [upAr, setupAr] = useState(150);
  const [precoupAr, setprecoupAr] = useState(3025);
  const [addNumeroAr, setaddNumeroAr] = useState(150);

  const [quandoAPP, setquandoAPP] = useState(1);
  const [quandoAPA, setquandoAPA] = useState(1);
  const [quandoAPAr, setquandoAPAr] = useState(1);

  useEffect(() => {
    console.log('Estado inicial com sucesso!');
    const salvo = localStorage.getItem("Aura")
    const numero = parseInt(salvo);
    if (!isNaN(numero)){setContador(numero);}
    else{setContador(0);}
  }, []);
   

  useEffect(() => {
    console.log('Contador mudou! Agora está: ',contador);
    document.title = `Você farmou ${contador} de Aura`
    localStorage.setItem("Aura",contador)
  },[contador]);

  
  return (
    <>
      <h1>sigma clicker</h1>
      <h2>{contador} sigma coins</h2>
      <h3> {numero} sigma coins por click!</h3>
      {contador > 1000 && <p>uou mil sigma coins</p>}
      {contador > 1000000 && <p>Gregos</p>}
      {contador > 10000000000 && (
        <p>
          “Ὅστις δὲ φύσει, καὶ οὐ διὰ τύχην, ἄπολις ἐστί, ἢ φαῦλος ἢ κρείττων ἢ
          ἄνθρωπος· ὥσπερ καὶ ὁ ἀπόλεμος, αὐτάρκης γάρ, ἢ θηρίον ἢ θεός.” ~
          Aristóteles
        </p>
      )}
      {contador > 10000000000000 && <p>Platinou O SIGMA CLICKER</p>}
      <button onClick={() => setContador(contador + numero)}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sigma_uc_lc.svg/250px-Sigma_uc_lc.svg.png"
          width="200%"
          height=""
        />
      </button>{' '}
      <br></br>
      <br />
      //-----------------------------------------------------------------------------------------
      
      <br></br>
      {qtdPlatao > quandoAPP && (
        <button
          onClick={() => {
            if (contador >= precoupPlatão) {
              setContador(contador - precoupPlatão);
              setupPlatão(upPlatão + addNumeroPlatão);
              setprecoupPlatão(precoupPlatão * 3);
              setaddNumeroPlatão(addNumeroPlatão * 2);
              setquandoAPP(quandoAPP * 3);
            }
          }}
        >
          <h3>UPGRADE</h3>
          <h3>A mente</h3>
          <img
            src="https://i.pinimg.com/736x/b3/9b/da/b39bda25f825cc90bb145234f7bd2aa0.jpg"
            width="60%"
            height=""
          />
          <br></br>
          Preço: ({precoupPlatão}) <br></br>+{addNumeroPlatão} Platão click
        </button>
        /// ----------------------------------------------------------------------------------------///
      )}
      <br></br>
      
      {qtdAristoteles > quandoAPA && (
        <button
          onClick={() => {
            if (contador >= precoupA) {
              setContador(contador - precoupA);
              setupA(upA + addNumeroA);
              setprecoupA(precoupA * 3);
              setaddNumeroA(addNumeroA * 2);
              setquandoAPA(quandoAPA + 10);
            }
          }}
        >
          <h3>UPGRADE</h3>
          <h3>A Lógica</h3>
          <img
            src="https://cdn.pensador.com/img/frase/ar/is/aristoteles_quot_eu_sou_o_que_eu_faco_e_nao_o_que_eu_di_lm543w5.jpg"
            width="60%"
            height=""
          />
          <br></br>
          Preço: ({precoupA}) <br></br>+{addNumeroA} Aristoteles click
        </button>
        /// ----------------------------------------------------------------------------------------///

        /// ----------------------------------------------------------------------------------------///
      )}
      <br></br>
      -----------------------------------------------------------------------------------------//
      <br></br>
      <button
        onClick={() => {
          if (contador >= precoP) {
            setContador(contador - precoP);
            setNumero(numero + upPlatão);
            setPrecoP(precoP * 2);
            setQtdPlatao(qtdPlatao + 1);
          }
        }}
      >
        {qtdPlatao} Platão (Custo: {precoP}) +{upPlatão} click
      </button>{' '}
      <br></br>
      <img
        src="https://filosofia.arcos.org.br/content/images/2021/07/Plato-raphael-1.jpg"
        width="40%"
        height=""
      />{' '}
      <br></br>
      <button
        onClick={() => {
          if (contador >= precoA) {
            setContador(contador - precoA);
            setNumero(numero + upA);
            setPrecoA(precoA * 2);
            setQtdAristoteles(qtdAristoteles + 1);
          }
        }}
      >
        {qtdAristoteles} Aristoteles (Custo: {precoA}) +{upA} click
      </button>{' '}
      <br></br>
      <img
        src="https://static.todamateria.com.br/upload/ar/is/aristoteles-cke.jpg"
        width="40%"
        height=""
      />{' '}
      <br></br>
      <button
        onClick={() => {
          if (contador >= precoAr) {
            setContador(contador - precoAr);
            setNumero(numero + upAr);
            setPrecoAr(precoAr * 2);
            setQtdarquimedes(qtdarquimedes + 1);
          }
        }}
      >
        {qtdarquimedes} Arquimedes (Custo: {precoAr}) +15 click
      </button>{' '}
      <br></br>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFaVWqhdQCKqw9opJQ-wO6Ow_dYac2Mczw_FqrGcn9h7MVnv2IGJSAN4FxHVft9k6MO8aJZj1885eNrjDVEtQyxCPgw_iaFJQWIXkJPuIyQg"
        width="40%"
        height=""
      />{' '}
    </>
  );
}

export default Sigmaclicker;
