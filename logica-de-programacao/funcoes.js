/* Formas de Declarar
Além da forma tradicional de declarar, há ainda duas formas de utilizar funções, que é usando do artifício de que em JavaScript funções são valores. */

// Usando function
function soma1(a,b) { return a+b; }
// Atribuindo uma função anônima em constantes
const soma2 = function(a,b) { return a+b; };

/* Exemplos de funções de flecha: */
const soma3 = (a,b) => a + b;
const hello1 = () => "Hello World!";
const hello2 = (name) => "Hello " + name;
const hello3 = (name) => {return "Hello " + name;};

// - - - - - - - - - 
function escreva(texto) {
   console.log(texto);
}
escreva('Criei uma função com parametro!');


function somar(a, b) {
   return a + b;
}
// Aqui a variavel vai receber como atribuição o que a função somar() retornar.
let resultado = somar(5, 8);
