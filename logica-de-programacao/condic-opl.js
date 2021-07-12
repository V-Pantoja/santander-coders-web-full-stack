let numero = 1;

// IF / ELSE
if (numero > 1) {
  console.log('Passou!');
}
else if (numero === 1) {
  console.log('Alcançou!');
}
else {
  console.log('Chegando!');
}


let numeroo = 5;

// Operador Ternario (sintaxe reduzida de um if/else)
let paridade = numeroo % 2 == 0 ? 'par' : 'inpar';

console.log(paridade); // return = inpar


// SWITCH
let sinal = "amarelo";

switch (sinal) {
  case "vermelho":
    console.log('Pare!');
    break;
  case "amarelo":
    console.log('Atenção!');
    break;
  case "verde":
    console.log('Siga!');
    break;
  default:
    console.log('Sinal desligado.');
    break;
}
// return = Atenção!