/* Encapsulamento é o conceito de negar o acesso aos atributos de uma classe diretamente, seja para leitura ou escrita. A maioria das linguagens orientadas a objetos utilizam algum comando como private por exemplo para restringir esse acesso.
O JavaScript não é uma linguagem orientada a objetos de nascença, o suporte a conceitos mais avançados em POO só foi adicionado recentemente. JavaScript até hoje ainda trata classes como funções, mesmo tendo a palavra class e uma sintaxe especial para montar classes. */

// Aqui usamos let no lugar de this. para indicar que a cor é uma informação privada da classe Quadrado, de forma que ela não está acessível para leitura ou alteração de fora dessa classe.
function Quadrado(base, altura) {
   this.base = base;
   this.altura = altura;
   let cor = 'blue';
}

const quadrado2 = new Quadrado(3, 7);

console.log(quadrado2.cor); // retorna = undefined

// Aqui o 'red' NÃO substituiu o 'blue' da variavel, e sim foi criado um novo atributo com esse valor.
quadrado2.cor = 'red';
console.log(quadrado2.cor);

/* - - - - - - - - - - - - - - */

// Também podemos usar um factory function, uma função que cria um objeto, para encapsular informações seria assim:
function criaQuadrado(base, altura) {

   let cor = 'blue';

   return {
      base,
      altura,
      getCor: function() {return cor;}
   };
}

const criaQuadrado2 = criaQuadrado(3, 4);
console.log(criaQuadrado2.getCor());

// Declaração de uma prorpiedade privada no contexto de classes
class outroQuadrado {
   constructor(lado, altura) {
      // declaração da variavel opcional
      let cor = 'blue';

      this.lado = lado;
      this.altura = altura;

      // declaração do metodo
      this.getCor = () => { return cor; };
   }
}

const outroQuadrado2 = new outroQuadrado (2, 3);
console.log(outroQuadrado2.getCor());
