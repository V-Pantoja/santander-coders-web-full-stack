/* Variavel LET evita problemas com escopos */
let num1 = 12;
let num2 = 13.5;

let caract = "Camado";

let bollean = true;

/* Obs: O Javascript é uma linguagem dinâmica,
então é possivel atribuir novos valores em variáveis ja criadas com algum valor pré-definido: */
num1 = 24;
caract = "Tanjiro";

let nada; // valor e tipo não definidos
console.log(nada) // return = undefined

let nada2 = null; // variavel vasia (sem informação)
console.log(nada2) // return = null

/* Variáveis constantes não podem ter o valor alterado futuramente */
const valorPi = 3.14;
