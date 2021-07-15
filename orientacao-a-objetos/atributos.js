/* Quando formos adicionar um método para calcular área nessa classe, precisamos garantir que os valores de base e altura sejam números ou então o cálculo será impossível, lembre-se que nada impede que sejam passadas strings por exemplo. */

// Para isso, é necessário fazer uma lógica condicional, podemos usar isNaN que é uma função que verifica se o valor não é número:
 
class Quadrado{
   constructor(base, altura) {
      //isNaN (is not a number)
      // throw (lança um erro em mensagem)
      if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números!";
      this.base = base;
      this.altura = altura;

      // pode-se tambem adicionar um atributo opcional
      this.cor = undefined;
   }
}

//const quadrado = new Quadrado('dez', 'onze');
//console.log(quadrado);

const quadrado2 = new Quadrado(15, 15);
console.log(quadrado2);
