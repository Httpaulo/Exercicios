function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    return "Erro: Divisão por zero.";
  }
  return a / b;
}

function processar(num1, num2, callback) {
  return callback(num1, num2); 
}

console.log("Soma:", processar(10, 5, soma));
console.log("Subtração:", processar(10, 5, subtracao));
console.log("Multiplicação:", processar(10, 5, multiplicacao));
console.log("Divisão:", processar(10, 5, divisao));