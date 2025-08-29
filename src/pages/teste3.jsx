import React from "react";

function Teste3() {
  function receber_numero() {
    let num1 = 0;
    let num2 = 0;
    num1 = parseInt(prompt("Escreva o primeiro número"));
    num2 = parseInt(prompt("Escreva o segundo número"));

    return [num1, num2];
  }

  function calcular(op) {
    let [num1, num2] = receber_numero();
    let res = 0;
    switch (op) {
      case "+":
        res = somar(num1, num2);
        break;
      case "-":
        res = subtracao(num1, num2);
        break;
      case "*":
        res = multiplicacao(num1, num2);
        break;
      case "/":
        res = divisao(num1, num2);
        break;
      case "**":
        res = exponenciacao(num1, num2);
        break;
    }
    alert(`${num1} ${op} ${num2} = ${res}`);
  }

  function somar(num1, num2) {
    let res = num1 + num2;
    return res;
  }
  function subtracao(num1, num2) {
    let res = num1 - num2;
    return res;
  }
  function multiplicacao(num1, num2) {
    let res = num1 * num2;
    return res;
  }
  function divisao(num1, num2) {
    let res = num1 / num2;
    return res;
  }
  function exponenciacao(num1, num2) {
    let res = num1 ** num2;
    return res;
  }

  return (
    <>
      <button onClick={() => calcular("+")}>Somar</button>
      <button onClick={() => calcular("-")}>Subtração</button>
      <button onClick={() => calcular("*")}>Multiplicação</button>
      <button onClick={() => calcular("/")}>Divisão</button>
      <button onClick={() => calcular("**")}>Exponenciação</button>
    </>
  );
}

export default Teste3;
