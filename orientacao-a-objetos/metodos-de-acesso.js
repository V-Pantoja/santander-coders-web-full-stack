/* Métodos de Acesso em linguagens como o Java são métodos que permitem a leitura e/ou escrita (a critério do programador) de atributos privados. Podemos criar métodos de acesso ao molde do que fizemos na aula passada: */
class Quadrado {

   constructor(lado, altura) {
      let cor = 'blue';
      this.lado = lado;
      this.altura = altura;

      // Nesse exemplo, getCor retorna o valor da cor enquanto o setCor altera o valor da cor.
      this.getCor = () => {return cor;};
      this.setCor = (c) => {cor = c;}
   }
}

const quadrado = new Quadrado(3, 4);
quadrado.setCor('red');

console.log(quadrado.getCor());
