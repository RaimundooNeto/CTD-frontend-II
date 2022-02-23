import somar from './somar.js';
import subtrair from './subtrair.js';
import  multiplicar from './multiplicar.js';
import  dividir from './dividir.js';

let numero1 = parseInt(prompt("Informe o primeiro número"));
let numero2 = parseInt(prompt("Informe o segundo número"));
let operacao = parseInt(prompt("Escolha uma das operações: \n 1 - somar \n 2 - subtrair \n 3 - multiplicar \n 4 - dividir"));

const operacoes = {
  1: somar(numero1, numero2),
  2: subtrair(numero1, numero2),
  3: multiplicar(numero1, numero2),
  4: dividir(numero1, numero2)
}

alert(`O resultado é: ${operacoes[operacao]}`);