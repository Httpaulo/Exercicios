function soma(a, b) {
  if (typeof(a) !== "number" || typeof(b) !== "number") {
    throw new Error("A e B precisam ser numeros");
  }
  return a + b;
}

function subtrai(a, b) {
  if (typeof(a) !== "number" || typeof(b) !== "number") {
    throw new Error("A e B precisam ser numeros");
  }
  return a - b;
}

function multiplica(a, b) {
  if (typeof(a) !== "number" || typeof(b) !== "number") {
    throw new Error("A e B precisam ser numeros");
  }
  return a * b;
}

function divide(a, b) {
  if (typeof(a) !== "number" || typeof(b) !== "number") {
    throw new Error("A e B precisam ser numeros");
  }
  if (b === 0) {
    throw new Error("Não é possível dividir por zero.");
  }
  return a / b;
}

try {
  console.log("Soma:", soma(10, 5));
  console.log("Subtração:", subtrai(10, 5));
  console.log("Multiplicação:", multiplica(10, 5));
  console.log("Divisão:", divide(10, 2));

} catch (erro) {
  console.log("Erro:", erro.message);
}