import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

try {
  
  const nome = await rl.question("Digite o nome do usuário: ");
  
  const nota1 = Number(await rl.question("Digite a primeira nota: "));
  const nota2 = Number(await rl.question("Digite a segunda nota: "));
  const nota3 = Number(await rl.question("Digite a terceira nota: "));

  const notas = [nota1, nota2, nota3];

  for (let i = 0; i < notas.length; i++) {
    if (isNaN(notas[i])) {
      throw new Error(`A nota informada na posição ${i + 1} não é um número válido.`);
    }
  }

  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  
  const media = soma / notas.length;
  const maiorNota = Math.max(...notas);
  const menorNota = Math.min(...notas);

  console.log(`\n--- Boletim de ${nome} ---`);
  console.log(`Maior nota: ${maiorNota}`);
  console.log(`Menor nota: ${menorNota}`);
  console.log(`Média: ${media.toFixed(2)}`);

} catch (erro) {
  console.log("\nErro:", erro.message);
} finally {
 
  rl.close();
}